# Index

- [Index](#index)
  - [debounce like search](#debounce-like-search)
  - [throttleTime](#throttletime)

## debounce like search

emit only the last event after a certain amount of time

```

input$.pipe(
    debounceTime(500),
    // same thing as above: debounceTime(()=>interval(500))),
    pluck('target','value'), // or any object
    distinctUntilChanged()
).subscribe();

```


## throttleTime
Unlike debounce time, it first emits the value and wait for milliseconds

usage: progressbar 

```
// this might be the same as debounceTime(500) as 
// it only cares about last emitted value
throttleTime(500, asyncScheduler,{
    leader:false,
    trailing: true
})
```
 