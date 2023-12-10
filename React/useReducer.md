# Index
- for more complex state management instead of `useState`.
- for the state that's dependent on other state
- make one reduce when all states belong together
- `const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn)`;
- such as `const [userInput, setUserInput], const [userInputValid, setUserInputValid]` can be combined with `useReducer`
- 



