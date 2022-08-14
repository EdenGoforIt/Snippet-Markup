# Index

[[__TOC__]]

## why you need to return with () component

```
return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, 'Lets get started'),
    React.createElement(ExpenseItem, {items: expense})
);
```

JXS solution will simplify that into the below. As we need to return an array of elements, we need to wrap it with **parenthesis**. 
```
return (<div> ... </div>);
```