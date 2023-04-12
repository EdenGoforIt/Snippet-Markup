# index

# React

- Context (Component wide data)
- Props (data from parent components)
- State (internal data state)
- React evaluate whenever **props, state or context** change
- Virtual comparison is done by React
- When props, state or context change, all child components will be re-evaluated
- React initialize components only once and store necessary values or state. Then, re-evaluation happens after that.

# React-dom

- changes to the real DOM are made for differences between evaluations

# React.memo

- React renders the component and memoizes the result. Before the next render, if the new props are the same, React reuses the memoized result, skipping the next rendering
- When we want to evaluate when only the **props** changes
- why we are not using `React.memo` in all places? because it comes at cost, React need to store previous prop values for comparison
- `<Button onClick={onClickHandler}/>` even if we wrap this `Button` component, that will be evaluated because `onClickHandler` which is the function from the parent component will be re-created when the parent component is re-evaluated
- Because primitive values will be the same but `function, object and array` will have different references
- That's where `useCallBack` is useful as it's telling React not to create a new function every new execution

# useCallBack

- function is an object and by using a callback we are not changing the object for rerendering.
- useCallback() hook is called every time MyComponent renders
- Save **function** in the memory and use the same function without create anew
- Use when the function is never changed
- don't need to provide dependencies for the function you are mapping as useCallBack will memorize it already

  - e.g. `const toggle= useCallback(()=>{ setParagraph()} ,[])`;

- When using another variable inside useCallBack, closure happens by storing value with the function together; A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)
- The below will not be executed because function will be stored with `useCallback` with the value `allowToggle` as `false` (closure)

```
const toggle = useCallback(()=>{
    if(allowToggle){
        showToggle();
    }

},[]);

FIX: [allowToggle]

```

# useMemo

- when the resource (data) is expensive to perform re-evaluation
- parent component should be also wrapped such as below

  ```
  // in the parent component
  const list = useMemo(()=>[1,5,3,2,4],[]);

  // in the child component
  const sortedList = useMemo(()=>{
    const {items} = props;
    return items.sort((a,b)=> a-b);
  },[items]);
  ```

```

```
