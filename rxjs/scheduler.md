# Index

- normal JS async operations: `setTimeout, queueMicrotask, requestAnimationFrame`
- in RxJS: `asyncScheduler, asapScheduler, animationFrameScheduler, queueScheduler`

## scheduler as argument

```
of(1,2,3, asyncScheduler).subscribe(observer);

```

## observeOn Operator

```
interval(300).pipe(animationFrameScheduler).subscribe(observer);

```

## subscribeOn operator

```
of(1,2,3).pipe(subscribeOn(asyncScheduler)).subscribe(observer);

```

## asyncScheduler
- similar to `setTimeout`
- 
```
// work, delay, state
asyncScheduler.schedule(
    (state)=> console.log(state),
    3000,
    'state as a string'

);

```


## asapScheduler
- similar to queueMicroTask or Promise.resolve
- execute as soon as possible after all synchronous tasks
- 