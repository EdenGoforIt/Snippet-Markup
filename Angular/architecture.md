# index

## Presentation + Container + Component Store, Service

- moving more logics in the container in to the component store
-

### presentational component

- no logic no state, reactive form
- @input, @output only
- this keyword only used for input and output

### container component

- no logic and no state
- no `this` except for Store selector
- communicate with the component store

### component store

- most of the logic declared by combining selectors and establishing logical relationships between them

### Service

- retrieving data: only injected in the store

### component store
- single file needed different from other store