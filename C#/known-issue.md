# App Service and app insights returning

> Constant flow of GET requests to root returning 404 response in Azure container app visible in App insights

```

For me, the issue has been resolved by adding a root endpoint that just returns the response ok in my asp.net web API project.

app.MapGet("/", () => Results.Ok());

As my requirement was to keep the server always on. But if the requirement is flexible then the option Always On can be turned off.

```

It could be to do with azure front door
