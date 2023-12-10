# Index

[learn from the marble](https://thinkrx.io/rxjs/debounceTime-vs-throttleTime-vs-auditTime-vs-sampleTime/)

- [Index](#index)
  - [debounce like search](#debounce-like-search)
  - [throttleTime](#throttletime)
  - [sampleTime](#sampletime)
  - [audit time vs sample time](#audit-time-vs-sample-time)

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

## sampleTime

emits the most recently emitted value from the source observable within periodic time intervals

```
import { fromEvent, sampleTime } from 'rxjs';

const clicks$ = fromEvent(document, 'click');
const result$ = clicks$.pipe(sampleTime(1000));

result$.subscribe(x => console.log(x));
```

can be same as with `sample`

```
const timer$ = interval(1000);

timer$.pipe(
    sample($click)
).subscribe()

```

## audit time vs sample time

[source](https://dev.to/rxjs/debounce-vs-throttle-vs-audit-vs-sample-difference-you-should-know-1f21#:~:text=auditTime%20behaves%20in%20a%20similar,if%20the%20source%20actually%20emitted)
