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
