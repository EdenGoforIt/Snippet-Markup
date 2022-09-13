# Index

- Context is primarily used when some data needs to be accessible by many components at different nesting levels
- You need to wrap the component to use it
- You need to use `Provider` when the context is changed or having a state. 
- Context is not optimized for high frequency changes
- 

- [Index](#index)
- [How to](#how-to)

# How to

- `Provider` is a component for the context

```
<AuthContext.Provider>
    <component>
</AuthContext>

```
