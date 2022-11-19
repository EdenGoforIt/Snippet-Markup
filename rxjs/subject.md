## Subject

- **Observable** (Event Publisher) => **Observer** Subscribes to the Event
- [Detailed explanation of multicast, subject, observer and observables](https://netbasal.com/understanding-rxjs-multicast-operators-77b3f60af0a2)
- **Subject** is **Observable** + **Observer** + **Multicast**


## why asObservable for Subject
> A Subject is a special type of Observable that allows values to be multi-casted to many Observers. Subjects are like EventEmitters
> The purpose of this is to prevent leaking the "observer side" of the Subject out of an API. Basically to prevent a leaky abstraction when you don't want people to be able to "next" into the resulting observable.


- (source)[https://stackoverflow.com/questions/36986548/when-to-use-asobservable-in-rxjs]
- (source)[https://rxjs.dev/api/index/class/Subject]


## simple explanation
> **Subject**: only upcoming values
> **BehaviorSubject**: one previous value and the upcoming values
> **RelaySubject**: all previous values and upcoming values
> **AsyncSubject**: latest value when stream is closed