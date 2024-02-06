# Introduction

- Authorization filters – They run first to determine whether a user
is authorized for the current request.
- Resource filters – They run right after the authorization filters and
are very useful for caching and performance.
- Action filters – They run right before and after action method
execution.
- Exception filters – They are used to handle exceptions before the
response body is populated.
- Result filters – They run before and after the execution of the
action methods result.

the action filter can be added to different
scope levels: Global, Action, and Controller.
