import { describe, test, expect, jest } from "bun:test";
import callSyncSuccess from "./sync";
import callSyncError from "./sync.error";
import callAsyncSuccess from "./async";
import callAsyncError from "./async.error";
import callAsyncThrownError from "./async-thrown.error";
import callSyncTaskThrownError from "./sync-thrown-task.error";
import callAsyncTaskThrownError from "./async-thrown-task.error";

describe("errors-as-values", () => {
  describe("sync", () => {
    test("success", async () => {
      const arg1 = "arg1";
      const [error, result] = callSyncSuccess(arg1);

      expect(error).toBeNull();
      expect(result).toEqual({ success: true, arg1 });
    });

    test("error", () => {
      const callableChecker = jest.fn();
      const [error, result] = callSyncError(callableChecker);

      expect(callableChecker).toHaveBeenCalled();
      expect(error).toBeInstanceOf(Error);
      expect(result).toBeUndefined();
    });

    // TODO unsupported case
    // if the error is thrown in a task (such as `setTimeout`)
    // it will resolve in an `unhandled rejection` due to the fact that the error is thrown
    // outside of the function scope
    test.skip("NEGATIVE TEST: thrown error inside task", async () => {
      const callableChecker = jest.fn();
      await callSyncTaskThrownError(callableChecker);
      // unhandled rejection
      // expect failure
    });
  });

  describe("async", () => {
    test("resolve", async () => {
      const arg1 = "arg1";
      const [reject, resolve] = await callAsyncSuccess(arg1);

      expect(reject).toBeNull();
      expect(resolve).toEqual({ success: true, arg1 });
    });

    test("reject", async () => {
      const arg1 = "arg1";
      const [reject, resolve] = await callAsyncError(arg1);

      expect(reject).toEqual({ error: true, arg1 });
      expect(resolve).toBeUndefined();
    });

    test("thrown error", async () => {
      const callableChecker = jest.fn();
      const [error, result] = await callAsyncThrownError(callableChecker);

      expect(callableChecker).toHaveBeenCalled();
      expect(error).toBeInstanceOf(Error);
      expect(result).toBeUndefined();
    });

    // TODO unsupported case
    // if the error is thrown in a task (such as `setTimeout`)
    // it will resolve in an `unhandled rejection` due to the fact that the error is thrown
    // outside of the function scope
    test.skip("NEGATIVE TEST: thrown error inside task", async () => {
      const callableChecker = jest.fn();
      await callAsyncTaskThrownError(callableChecker);
      // unhandled rejection
      // expect failure
    });
  });
});
