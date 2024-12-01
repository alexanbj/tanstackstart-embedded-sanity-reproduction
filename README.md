# A reproduction repo for bug when embedding a Sanity studio in TanStack start

This is a reproduction of an issue that occurs when embedding a sanity studio in a tanstack start application.

The issue only seems to affect the dev server. Production builds just fine

## Steps

- Setup a basic tanstack application, following this guide https://tanstack.com/router/latest/docs/framework/react/start/getting-started
- embed a sanity studio, following this guide https://www.sanity.io/docs/embedding-sanity-studio
- run the dev server: `npm install && npm run dev`
- navigate to `http://localhost:3000/sanity`
- error happens
- See application builds fine using `npm run build`

```sh
8:37:17 AM [vite] Internal server error: Property left of ForOfStatement expected node to be of a type ["VariableDeclaration","LVal"] but instead got undefined
  Plugin: vite-plugin-tanstack-start-dead-code-elimination
  File: /Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/.vinxi/cache/client/deps/chunk-XONAPM26.js?v=ffa86631
      at Object.validate (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/types/lib/definitions/utils.js:102:11)
      at validateField (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/types/lib/validators/validate.js:33:9)
      at validate (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/types/lib/validators/validate.js:16:3)
      at NodePath._replaceWith (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/replacement.js:141:5)
      at NodePath._remove (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/removal.js:53:31)
      at NodePath.remove (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/removal.js:34:11)
      at exports.hooks (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/lib/removal-hooks.js:10:12)
      at NodePath._callRemovalHooks (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/removal.js:44:11)
      at NodePath.remove (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/removal.js:26:25)
      at VariableDeclarator (file:///Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/babel-dead-code-elimination/dist/index.js:121:18)
      at NodePath._call (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/context.js:49:20)
      at NodePath.call (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/context.js:39:18)
      at NodePath.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/context.js:88:31)
      at TraversalContext.visitQueue (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:90:16)
      at TraversalContext.visitMultiple (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:62:17)
      at TraversalContext.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:111:19)
      at traverseNode (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/traverse-node.js:22:17)
      at NodePath.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/context.js:94:52)
      at TraversalContext.visitQueue (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:90:16)
      at TraversalContext.visitSingle (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:66:19)
      at TraversalContext.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:113:19)
      at traverseNode (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/traverse-node.js:22:17)
      at NodePath.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/context.js:94:52)
      at TraversalContext.visitQueue (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:90:16)
      at TraversalContext.visitMultiple (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:62:17)
      at TraversalContext.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:111:19)
      at traverseNode (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/traverse-node.js:22:17)
      at NodePath.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/context.js:94:52)
      at TraversalContext.visitQueue (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:90:16)
      at TraversalContext.visitSingle (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:66:19)
      at TraversalContext.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:113:19)
      at traverseNode (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/traverse-node.js:22:17)
      at NodePath.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/context.js:94:52)
      at TraversalContext.visitQueue (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:90:16)
      at TraversalContext.visitSingle (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:66:19)
      at TraversalContext.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:113:19)
      at traverseNode (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/traverse-node.js:22:17)
      at NodePath.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/context.js:94:52)
      at TraversalContext.visitQueue (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:90:16)
      at TraversalContext.visitSingle (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:66:19)
      at TraversalContext.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:113:19)
      at traverseNode (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/traverse-node.js:22:17)
      at NodePath.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/context.js:94:52)
      at TraversalContext.visitQueue (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:90:16)
      at TraversalContext.visitMultiple (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:62:17)
      at TraversalContext.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:111:19)
      at traverseNode (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/traverse-node.js:22:17)
      at NodePath.visit (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/path/context.js:94:52)
      at TraversalContext.visitQueue (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:90:16)
      at TraversalContext.visitSingle (/Users/alexanbj/Code/Hacking/tanstackstart-sanity-reproduction/node_modules/@babel/traverse/lib/context.js:66:19
```
