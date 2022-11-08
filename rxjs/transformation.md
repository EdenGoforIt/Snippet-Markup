# index



- [index](#index)
  - [Flattening operator](#flattening-operator)
  - [high order observables](#high-order-observables)
  - [MergeMap](#mergemap)
  - [SwitchMap](#switchmap)
  - [ConcatMap](#concatmap)
  - [ExhaustMap](#exhaustmap)

## Flattening operator

> Converting a higher order Observable into an ordinary Observable

[learn rxjs dev](https://rxjs.dev/guide/higher-order-observables)

```
const fileObservable = urlObservable.pipe(  // -> Outer Observable
   concatMap(url => http.get(url)), // -> Inner Observable
);

```

## high order observables

> An Observable of Observables

-[learn rxjs dev](https://rxjs.dev/guide/higher-order-observables)

## MergeMap

- maps values to a new observable on emissions from source, subscribing to and emitting results of inner observables.
- By default, mergeMap does not limit the number of active inner observable
- If you do not want to cancel the HTTP request, use it such as POST request

## SwitchMap

- There is only one inner active Observable
- switches to a new observable on emissions from source, cancelling any previous active inner observable.
- user for HTTP GET request that can be cancelled
- Great for reset, pause and resume functionality

## ConcatMap

- Maintains one active inner subscription, activates next observable when previous completes
- Use when order of execution is important and inner observables have finite lifespan.
  
## ExhaustMap
- different from switchMap in that it is just ignore the source where as switchMap cancels
- Probably least used operator
- Login function should be useful as only one active observable is needed
- ignores emitted values when there is an active inner observable
- Use when quick, subsequent emissions can be ignored like a refresh button or login request
- avoid if cancellation is important or ignoring emissions from the source would cause undesired effects. 
- 
