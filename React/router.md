# index

## Nav vs NavLink

- with NavLink, you can set styles such as `active`
- Need to use Nav or NavLink to be able to use SPA feature
- With `Link` no need to fetch the JavaScript again
-

## Link

```
// relative path
<Link to="product" />  // without `/` then `product` will be added after the current url

<Link to=".." relative='path' /> // go back, and default is relative='route'

```

## router using createBrowserRouter

```

import {createBrowserRouter, RouterProvider} from 'react-router-dom';


createBrowserRouter({
    path:'/',
    element: <Parent />,
    errorElement: <ErrorPage />,
    children:[
        { path:'', element: <HomePage /> },
        { path: index, element: <HomePage /> }, // set this a default route when the parent route is loaded
        { path:'shop', element: <ShopPage /> },

    ]

});

// we can use createRouterFromElements with which we can use an old syntax

function App(){
    return <RouterProvider  router={router}/>
}

export default App;

```
