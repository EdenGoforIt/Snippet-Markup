# Index

- [playground rxjs as well as marvely showing](thinkrx.io/rxjs/)\
- U can mock httpClient.get to return throwError(error), or return throwError(new Error()) in your TestService 
But HttpTestingController is designed specifically for this.

- [Index](#index)
  - [first()](#first)
  - [scan()](#scan)
  - [takeWhile()](#takewhile)
  - [distinctUntil and distinctUntilKeyChanged](#distinctuntil-and-distinctuntilkeychanged)

## first()

same as `filter, take(1)`.

```
    first(x => x > 200);
```

## scan()

Same as `reduce` with a starting value

```
const source$ = of(1,2,3);
const example = source$.pipe(scan(acc, curr)=> acc + curr, 0);

// 1, 3, 6

```

## takeWhile()

take the observable until the condition is met and if the condition is not met, complete the observable. With an `inclusive` parameter, it will take the last value which does not meet the condition

```
const source$ = of(1,2,3,4);
const example = source$.pipe(takeWhile(x=> x > 2), true);

//1, 2, 3 (last emitted value which does not meet the condition)

```

## distinctUntil and distinctUntilKeyChanged

ignore not unique values (based on the previous value; if the previous value and the current value same, then ignore it)

```
const numbers$ = [1,1,1,1,2,3];

numbers$.pipe(
    distinctUntilChanged()
).subscribe();

```

modify if needed

```
const numbers$ = [
    {name: 'test'},
    {name: 'test'}
];

numbers$.pipe(
    distinctUntilChanged((prev, curr)=>{
        return prev.name === curr.name;
    })
).subscribe(console.log)

```

this can be changed to with `distinctUntilKeyChanged()`

```
const numbers$ = [
    {name: 'test'},
    {name: 'test'}
];

numbers$.pipe(
    distinctUntilKeyChanged('name')
).subscribe(console.log)

```
