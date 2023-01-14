# index
- setState is run asynchronously 
## index.js

this means we want to replace html element having Id `root` with `<App /> (Whole React App)`

```
ReactDOM.render(
   <App />,
   document.getElementById('root')
)

```

## shallow merge

this will only update the `name`.
How it's working is if there is a `key` matched then update the value

```
this.state = {
   name: 'john',
   id: 1
};

this.setState({name:'Andres'})

```
