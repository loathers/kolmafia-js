# README

The `*.d.ts` files in this directory are type definitions for popular ASH scripts.

## Usage

Suppose you want to use Zlib in your TypeScript code. Importing Zlib will not work:

```ts
// Cannot find module 'zlib.ash' or its corresponding type declarations. (ts(2307))
import {getvar, setvar} from "zlib.ash";
```

To allow TypeScript to locate the type definition, you must modify `tsconfig.json` in your project:

```json5
{
  "compilerOptions": {
    "paths": {
      // Add this line
      // Warning: File names are case sensitive!
      "zlib.ash": ["./node_modules/kolmafia/contrib/zlib.ash"]
    }
  }
}
```

## Adding a type definition

If you want to submit a new type definition, ensure that the definition file name matches the spelling of the _ASH file name_. (e.g. `zlib.ash.d.ts` instead of `Zlib.ash.d.ts`)

Use the following template as a starting point:

```ts
/**
 * @file Type definition for <script name>, made by <original author name>.
 *
 * - ASH script name: <script name>
 * - ASH script version: <version>
 * - ASH script authors: <Comma-separated list of authors and maintainers>
 *
 * Links:
 *  - ASH script forum thread: <Add URL or remove this line>
 *  - ASH script repository: <Add URL or remove this line>
 */

// Add type definitions below and delete this comment
```
