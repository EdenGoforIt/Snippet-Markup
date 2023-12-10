# index

- Wrap with `Switch` to make only one active route
- Active route works with the name, means if paths have the same prefix, it would recognize both as active as the example below
- With Switch Statement, same as Angular route, route catch happens in order; `welcome` will be reached and `break` then `welcome2` will be ignored.

```
<Switch>
    <Route path='/welcome'>
        </Welcome>
    </Route>
    <Route path='/welcome2'>
        </Welcome>
    </Route>
</Switch>


```
