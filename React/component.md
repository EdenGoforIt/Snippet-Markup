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

JXS solution will simplify that into the below. As we need to return an array of elements, we need to wrap it with **parenthesis** or one root element (not many `<section></section><section></section>` not allowed ).

```
return (<div> ... </div>);
```

## how to add an event to html elements

We can't add such as `onClick={clickHandler()}` with parenthesis as it will be executed when the code is evaluated first.

```
<button onClick={clickHandler}></button>
<button onClick={()=>{})}></button>

```

## how to create a component

```
function App(){
    return <div></div>;
}

export default App;
```

```
const App= ()=>{
    return <div></div>
}

export default App;
```
