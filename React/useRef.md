# use cases

1. the value is persisted between component and re-renderings (having the same reference)
2. Updating a reference doesn't trigger re-rendering

[Good start with w3school](https://www.w3schools.com/react/react_useeffect.asp)

- [use cases](#use-cases)
  - [tracking status change](#tracking-status-change)
  - [simply showing a value without re-rendering](#simply-showing-a-value-without-re-rendering)
  - [access dom element and change behavior](#access-dom-element-and-change-behavior)

## tracking status change

Such as having previous value and current value

```
function App()
{
    const [inputValue, setInputValue]=useState("");
    const previousInputValue = useRef("");
    useEffect(()=>{
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (<>
        <input type="text"
         value={inputValue}
         onChange={(e)=>setInputValue(e.target.value)}
         />

    </>);

}

// this will give previous and current value
```

## simply showing a value without re-rendering

If we use a `useState` hook, then the app will re-render.

```
function App()
{
    const [inputValue, setInputValue]=useState("");
    const previousInputValue = useRef("");
    useEffect(()=>{
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (<>
        <input type="text"
         value={inputValue}
         onChange={(e)=>setInputValue(e.target.value)}
         />
         <h1>This is not re-rendered: {previousInputValue.current}</h1>

    </>);

}

```

## access dom element and change behavior

1. Is it okay to change the state of element using `useRef`?

function AccessingElement()
{
const elementRef = useRef(); // initialized with undefined

    useEffect(()=>{
        const divElement = elementRef.current;

        // or you can change the behavior
        elementRef.current.focus();
    }, []);

    return (
        <input ref={elementRef}>
        </input>
    );

}
