# Index

[[__TOC__]]

## function vs const function

```
function(){}
```
function declaration will be hoisted to the top of the scope, means if we want to use it in `onInit` we need to use it as function

vs

```
const something = () =>{};
```
if `click` event, we do not need a hoist.

