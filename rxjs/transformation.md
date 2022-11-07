# index

- [index](#index)
  - [Flattening operator](#flattening-operator)
  - [high order observables](#high-order-observables)
  - [MergeMap](#mergemap)
  - [SwitchMap](#switchmap)

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

- There is only one active Observable
- switches to a new observable on emissions from source, cancelling any previous active inner observable.
- user for HTTP GET request that can be cancelled
- GReat for reset, pause and resume functionality
