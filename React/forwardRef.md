- export child components functions to the parent 
- Combination of `React.forwardRef`, `useRef` and `useImperativeHandler`
- useful for `focus`


# Example

```

// in the child component
const Input = React.forwardRef((props, ref) =>{
    const inputRef = useRef();

    const activate = () =>{
        inputRef.current.focus();
    }

    useImperativeHandle(ref, ()=>{
        return {
            focus: activate     // focus will be exposed to the parent component
        }
    });

}


// in the parent component
if(emailIsInvalid)
{
    emailInputRef.current.activate();
}

<Input
   ref={emailInputRef} 

>
```