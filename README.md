# errors-as-values

## Purpose

This library exposes helpers to streamline the control flow in your applications.
As errors are thrown in `Javascript` natively, this library is built with the intention of getting as close to `Go` style syntax of always treating the error as a first class citizen and returning it together with the output of the given function.


```js
// eav -> errors as values
const [error, value] = eav(myFunctionThatDoesSomething);

if (null != error) {
  // handle error here
}
// use value being safe
```

## Contribution

To install dependencies:

```bash
bun install
```

To build the library run:

```bash
bun run build
```

This project was created using `bun init` in bun v1.0.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# Deployment

- Build with `bun run build`
- Go into `dist`
- Run `npm version <patch|minor|major>`
- Run `npm publish`
