# index

- useEffect is run after the component is rendered (but it seems like it runs useEffect in order line by line )
- useEffect is for side effect
- always add dependencies 

# use cases

- [index](#index)
- [use cases](#use-cases)
  - [clean up](#clean-up)
  - [only run first time](#only-run-first-time)
  - [how to add dependencies](#how-to-add-dependencies)
  - [fetch data from the backend](#fetch-data-from-the-backend)
  - [what to not add as dependencies](#what-to-not-add-as-dependencies)

## clean up

- clean up function runs from the **SECOND** execution of the side effect
- it runs after **unmount** and **before** every side effect code execution

Sometimes, you need to clean up some values.

```
useEffect(()=>{},[
    const timer = setTimeout(()=>{

    });

   // this code runs **before** setTimeout
   return ()=>{
      clearTimeout(timer);
   };
]);


```

## only run first time

Example

```
useEffect(()=>{
    // this will run only once after component is first rendered because there is no dependencies
}, []);

```

## how to add dependencies

pass a pointer to a function

```
useEffect(()=>{
    isValid(userName, password);
},[isValid, userName, password]);

// here we actually don't need isValid as when userName and password changed, we need to run `isValid` function

```

## fetch data from the backend

as fetchData will be created as a new object when the component is re-evaluated, we need to remember the function that is used to fetch data, 

```
useEffect(()=>{
    fetchData();
},[fetchData]);


const fetchData - useCallback(async ()=>{
  // fetch data here

});
```


## what to not add as dependencies

In the previous lecture, we explored useEffect() dependencies.

You learned, that you should add "everything" you use in the effect function as a dependency - i.e. all state variables and functions you use in there.

That is correct, but there are a few exceptions you should be aware of:

You DON'T need to add state updating functions (as we did in the last lecture with setFormIsValid): React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)

You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change

You also DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

So long story short: You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered. That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!

Here's a made-up dummy example to further clarify the above-mentioned scenarios:

```
import { useEffect, useState } from 'react';

let myTimer;

const MyComponent = (props) => {
const [timerIsActive, setTimerIsActive] = useState(false);

const { timerDuration } = props; // using destructuring to pull out specific props values

useEffect(() => {
    if (!timerIsActive) {
    setTimerIsActive(true);
    myTimer = setTimeout(() => {
        setTimerIsActive(false); }, timerDuration);}
    }, [timerIsActive, timerDuration]);
};
```

In this example:

timerIsActive is added as a dependency because it's component state that may change when the component changes (e.g. because the state was updated)

timerDuration is added as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)

setTimerIsActive is NOT added as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change

myTimer is NOT added as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated

setTimeout is NOT added as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change
