# index

- A stream can complete or error out
- after error is thrown, the stream will not emit any other values
- if the stream completes, it cannot error out
- if the stream errors out, it cannot complete afterwards

* Subscribe call takes three optional arguments (success, error, and complete)
* HTTP stream emits only one value and then complete (success and complete will happen)

## http client

- emits value and complete
  [source ](https://stackoverflow.com/questions/60466193/are-http-operations-of-the-httpclient-always-single-value-observables-can-they)
  Everything everyone says about not needing to unsubscribe from http requests is true - you can safely subscribe and forget.

It's not true that a request through HttpClient will only receive a single result, as you can observe other events aside from just the response.
[source](https://stackoverflow.com/questions/65412669/do-i-need-to-unsubscribe-from-httpclient-with-subscription-in-component)
you should unsubscribe

there is no problem regarding memory leak as http observables are completed after first response.

but your logic in subscribe block can cause problem, for example if your api call is taking too long and user decides to leave the page then in that case since you have not unsubscribed the observable your logic such as login or navigation inside subscribe can cause problems
