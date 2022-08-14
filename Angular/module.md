# Index
[[__TOC__]]

## forRoot()
When it's lazy loaded, the service can have multiple instances. We need to inject a service into the root of the module. In the module where the shared module is registered, we inject as `SharedModule.forRoot()` but in the child modules that is using a `SharedModule`, we just inject `SharedModule`. 
```
{
    export class SharedModule{
        static forRoot(): ModuleWithProviders{
            return {
                ngModule: SharedModule,
                providers: [
                    AuthService
                ]
            };
        }
    }
}

```
