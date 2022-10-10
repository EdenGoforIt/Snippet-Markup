# dependencies

- [source](https://stackoverflow.com/questions/59098253/differences-of-dependencies-and-devdependencies)
- [source](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies/22004559#22004559)

package.json

```
{
   "dependencies": {
    // I am included in the package itself so don't worry about me
    // packages required by your application in production
   },
   "devDependencies":{
    // nothing will here will be installed automatically unlike dependencies
    // packages required by your application in local development and testing
    // not included in the production bundle
    // Linters and code formatters like eslint, prettier, commitlint, husky, and lint-staged would all be devDependencies as well.
   },
   "peerDependencies":{
    // please install me to use it :(
   }


}
```
