# index

- React hook starts with use such as `useContext, useState`, etc.
- only use component functions and custom hooks
- only call them **at the top Levels **(never nested functions or `blocks (inside if)`)
- always use dependencies in `useEffect`
- hooks are just JavaScript functions

useState: to manage state. returns a stateful value and a updater function to update it
useEffect: to manage sideEffects such as api calls, timers.
useContext: to return a current value for a context.
useReducer: For a complex state management
useCallback: It returns a memorized version of a call back( remember function ) to avoid re-rendering.
useMemo: it returns a memorized value (remember returned value)
useRef: it's mutable and to access a child component imperatively (by order or command)
useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
useDebugValue: Helps to display a label in React DevTools for custom hooks.

## state

- setState is run asynchronously
- setState has a call back function which happens after all state updated

```
this.setState((state, props)=>{
    return {name: 'Hey'};
},()=>{console.log(this.state);});
```
