import { defineConfig } from "vite";
// import RollupPlugin from "vite-plugin-rollup";

export default defineConfig({
  rollupOptions: {
    input: "./src/index.js",
  },
  // plugins: [
  //   RollupPlugin({
  //     write: true,
  //     input: "./src/index.js",
  //     output: {
  //       file: "./build/cjs/index.js",
  //       format: "cjs",
  //     },
  //   }),
  // ],
});
