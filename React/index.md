# index

- setState is run asynchronously

- [some react projects](#<https://github.com/sahandghavidel)>
- [next full stack](#<https://github.com/joschan21/similarity-api)>

> The initial page load on CSR is supposedly slower, but page reuploads can become very fast because the entire UI is not called on the server.

> React server-side rendering (SSR) means components are rendered on the server, and the output is HTML content. One argument for doing SSR is that it has a better application performance, especially for content-heavy apps; another one is that the HTML output is more SEO-friendly compared with doing CSR.

> React is also considered SEO-friendly, meaning that React components are more straightforward for Google to index. And this is a big deal for businesses.

> Package-lock.json is a replica, versioned dependency tree of your package.json file.

> Given a version number MAJOR.MINOR.PATCH, increment the:

> MAJOR version when you make incompatible API changes,
> MINOR version when you add functionality in a backward-compatible manner, and
> PATCH version when you make backward-compatible bug fixes.

> JSX => JavaScript XML

> public/index.html mounting point for React apps
> src/index.tsx holds the main render call from the React DOM.
> public/robots.txt: Also known as the robots exclusion protocol or standard. You can declare here the pages or HTML that you want to hide from Google’s search results. Sample pages include the admin page because your users don’t need to know your app’s admin page.
> Declaration files also called .d.ts files are prefixed with @types.The @types prefix is used to indicate that a given package has type definitions available in a separate package. But, nowadays libraries have types included

## Create React

```
npx create-react-app react-car --template redux-typescript
```

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

# Props

Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component.
