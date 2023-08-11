# index

- [Microsoft](https://learn.microsoft.com/en-us/dotnet/standard/threading/threads-and-threading)
- [perfect example of concurrncy and parallelism](https://freecontent.manning.com/concurrency-vs-parallelism/#:~:text=Concurrency%20is%20about%20multiple%20tasks,resources%20like%20multi%2Dcore%20processor.)

- multi programming is the logically concurrent execution of the multiple programs
- whereas multithreading provides concurrency within the context of the a single process and multiprogramming provides concurrency between processes
- thread is a separate flow of control that occurs within a process
- an execution of the program is generally associated with a single process
- multithreading requires less processing resources than multiprogramming because concurrent threads are able to share common resources more easily. Multiple execution programs tend to duplicate resources and share data as the result of more time-consuming **inter-process** communication
- When multiple threads can make calls to the properties and methods of a single object, it is critical that those calls be synchronized. Otherwise one thread might interrupt what another thread is doing, and the object could be left in an invalid state. A class whose members are protected from such interruptions is called thread-safe.
- Multithreading solves problems with throughput and responsiveness, but in doing so it introduces new problems: deadlocks and race conditions.

## Thread and Threading

- A thread is a basic unit to which an operating system uses to allocates processor time
-

## synchronization primitives

- synchronize access to a shared resource or coordinate thread interactions
-
