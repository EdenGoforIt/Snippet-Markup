# index

- NgZone a service executing work inside and outside of the Angular Zone
- NGZone Service is a service based on the zone.js
- zone.js is a execution context that persists across async tasks 
- Angular is a tree of components
- tick() in AppRef is responsible for rendering changes

A zone.js can do

- provide execution context
- intercept async tasks and provide life cycle hook
- provide centralize error handler for async tasks

>Execution Context is an abstract concept that holds information about the environment within the current code being executed

## Links

- [this dot](https://www.thisdot.co/blog/zone-js-deep-diving-execution-context)


## Execution Context
- hold information about the environment within the current code being executed