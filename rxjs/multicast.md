# Index
- [Source 1](https://netbasal.com/understanding-rxjs-multicast-operators-77b3f60af0a2)
- [Detailed explanation of multicast, subject, observer and observables](https://netbasal.com/understanding-rxjs-multicast-operators-77b3f60af0a2)
- get `Subject` as a parameter. It seems like when we want to have the same instance of the subject across.
- 


## operators are essentially observables
```
function map(fn){
    return source =>{
        return new Observable(observer=>{
            return source.subscribe({
                next(value){
                    observer.next(fn(value));
                }
            });
        });
    };
}


```