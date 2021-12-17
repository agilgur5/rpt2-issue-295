Repro for:

https://github.com/developit/microbundle/issues/808


Steps to repro:

1 - Well, clone this repo...

2 - Install pnpm on your machine if you don't have it

3 - Use pnpm to install dependencies by running `pnpm install` at the root of this project (you only need to do this once, the package dependencies will also be installed)

4 - Now go to the package under packages/some-package and run `pnpm build`

You should get this:

```

(babel plugin) SyntaxError: C:\Users\icaro\Desktop\code\asas-workspace\workspaces\bundle-bug-repro\modules\code.ts: Unexpected token, expected "," (2:38)

  1 |
> 2 | export default ( someTypescriptSyntax : string ) => {
    |                                       ^
  3 |     return someTypescriptSyntax
  4 | }

```


