Repro for:

https://github.com/developit/microbundle/issues/808


Steps to repro:

1. Clone this repo
1. Install `pnpm` if you don't have it: `npm install -g pnpm`
1. `pnpm install` at the root of this project
1. `cd packages/some-package && pnpm install`
1. `pnpm build`

You should get this:

```txt
(babel plugin) SyntaxError: absolute-path-to\bundle-bug-repro\modules\code.ts: Unexpected token, expected "," (2:38)

  1 |
> 2 | export default ( someTypescriptSyntax : string ) => {
    |                                       ^
  3 |     return someTypescriptSyntax
  4 | }
```
