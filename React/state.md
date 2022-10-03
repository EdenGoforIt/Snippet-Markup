# Introduction

- React code is evaluated in the first place and not update the state afterwards. So we need to use a named function called `useState` for React to update the change made
- initial value provided `useState(props.title)` is only executed once when the component is evaluated; means not managing reference?
- state changes not happening instantly, but scheduled and managed by React by priority. 
- React will **state batching** (collect) all state change in the component into one and update all of them together

# Index

[[__TOC__]]

## how to use state

We are telling React by using `useState` that once `setStateFunction` is called, we need to evaluate the component again.

`[currentState, a function that updates it] = useState(initialValue)`

Why use `const`?

> React calls your component for the first time. React finds a call to useState , creates a new Hook object (with the initial state), changes the current Hook variable to point to this object, adds the object to the Hooks list, and return the array with the initial state and the function to update it.

```
const [title, setTitle] = useState(props.title);
```

## update state with object (previous state)

**If the state is dependent on the previous state** you should use the following way, otherwise, there would be chances of not getting the correct state. Because React schedule state update and if there are many update scheduled, the update could be delayed and object can't have the up-to-date state.

this will not guarantee you are getting the latest state

```
setUserInput({...userInput, amount: event.target.value});
```

But this will guarantee you are setting the previous state

```
setUserInput((prevState)=>{
    return {...prevState, amount: event.target.value};
});

```
