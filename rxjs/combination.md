# Index

- [Index](#index)
  - [startWith and endWith](#startwith-and-endwith)
  - [cancat](#cancat)
  - [merge](#merge)
  - [combineLatest](#combinelatest)
  - [forkJoin](#forkjoin)

## startWith and endWith

- emit first in the subscription (startWith)
- emit last in the subscription (endWith)

```
const intervals$ = interval(1000);
startWith(0)
endWith(0)
```

## cancat

## merge

## combineLatest

> Not only does forkJoin require all input observables to be completed, but it also returns an observable that produces a single value that is an array of the last values produced by the input observables. In other words, it waits until the last input observable completes, and then produces a single value and completes.

>In contrast, combineLatest returns an Observable that produces a new value every time the input observables do, once all input observables have produced at least one value. This means it could have infinite values and may not complete. It also means that the input observables don't have to complete before producing a value.

## forkJoin

you can convert into object

```
forJoin({
  number: numbers$,
  letters: letters$
}).subscribe();

// will return
{
  number: 3,
  letters: "c"
}

forJoin([]).subscribe(([oneOb, twoObs]: [string, User]));

// will return
{
  number: 3,
  letters: "c"
}
```
