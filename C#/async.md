# Introduction

## Task

Three types of return type

- Task<TResult>, for an async method that returns a value.
- Task, for an async method that does not return a value.
- void, which we can use for an event handler.

- we should
use void only for the asynchronous event handlers which require
a void return type. Other than that, we should always return a Task.

- if our sync method returns no value (has a void for the return type),
then our async method should return Task. This means that we can use
the await keyword inside that method, but without the return keyword.

- Sometimes, the async code could
become slower than the sync one because EF Core’s async commands
take slightly longer to execute (due to extra code for handling the
threading), so leaving this option is always a good choice.

- It is general advice to use async code wherever it is possible, but if we
notice that our async code runes slower, we should switch back to the
sync one.
