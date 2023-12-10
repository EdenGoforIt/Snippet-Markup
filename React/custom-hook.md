# Index
- outsource stateful logic into re-usable functions
- can use React hooks and state
- can use for sending requests as only http methods and body could be different
- [Custom Hook http request](https://dev.to/shaedrizwan/building-custom-hooks-in-react-to-fetch-data-4ig6)



## Rules
- name it as `hooks/use-counter.js`. Always start with `use`
- `const useCounter =()=>{};`


## Examples

```

const useCounter = (positive = true)=>{
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(positive){
                setCounter((prevCounter)=> prevCounter +1);
            }else{
                setCounter((prevCounter)=> prevCounter +1); 
            }
        });

        return ()=>clearInterval(interval);

    }, [positive] );

}

```

```

const useCounter = (counterFn)=>{
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        const interval = setInterval(counterFn());
        return ()=>clearInterval(interval);

    }, [positive] );

}

```