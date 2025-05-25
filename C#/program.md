# Index


## Add IOptions

```csharp
       services
                .AddOptions<DatabaseConfiguration>()
                .Configure<IConfiguration>((options, config) => config.Bind("Database", options));
```
