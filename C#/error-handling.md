# Index

## Exception

- for custom error handling to be caught using try and catch (Local Exception catch)
- by using try and catch, you can propagate the error
- Domain specific errors

## IExceptionFilter

- operats at a higer level within the asp.net ore middleware pipeline (Global exception catch)
- Basically you handle exceptions domatically with Exception then you get that or catch that exception using IExceptionFilter to add more details to the exception.
- need to add unhandledException if (!context.ExceptionHAndled) is not true to deal with uncaptured exceptions. 
