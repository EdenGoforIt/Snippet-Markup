# Index

[[__TOC__]]

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
