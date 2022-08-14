# Index
[[__TOC__]]

## Route structure
it's always better to have an empty route to redirect every child routes to the desired route
```
{
    path: 'auth',
    children: [
        {path: '', pathMatch: 'full', redirectTo: 'login'}
        {path: 'login', loadChildren: './login/login.module#LoginModule'}
    ]
}

```

