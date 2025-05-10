## Alias

combine common commands

```
git config --global alias.pushall '!f() { git add . && git commit -m "$1" && git push; }; f'
```
