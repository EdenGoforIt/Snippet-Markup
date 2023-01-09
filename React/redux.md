# index

- local State (component store), cross-component state (feature state), app-wide state (root state)
- only one store exist and feature states

## local state

- useState() / useReducer()

## cross-components state

- props drilling / props chains
- React Context
- Redux

## app-wide state

- props drilling / props chains
- React Context
- Redux

## React Context vs Redux

- disadvantages of REact context
  - Complex setup and management
    ```
      <AuthContextProvider>
        <ThemeContextProvider>
            <UIInteractionContextProvider>
            </UIInteractionContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    ```
  - for high frequency changes, it's not performant

## reducer

- mutate Store Data
- component dispatch (trigger) an action
- take input and produce the same output (pure function)

same input params **(Old State, Action)** pure functions
return new state object

## how to start

in `App.js`, wrap the App just like we did with `React Context`.
You can wrap any component with `Provider` if that's the top most component using Store

```
import {Provider} from 'react-redux';
import store from './store/index';

root.render(<Provider store={store}><App /></Provider>);

```

## selector

need to `connect` if `Class` based component

```
import {useSelector, connect} from 'react-redux';

const counter = useSelector(state=>state.counter);

```

## dispatch

```
const dispatch = useDispatch();

const incrementHandler = ()=>{
 dispatch({type: 'increment', amount: 5});
}


```

## where to put sync and async code

- sync, side-effects => reducer
- async, fetching from the server => Components or Action Creator (in the Slice, there is an action creator)
