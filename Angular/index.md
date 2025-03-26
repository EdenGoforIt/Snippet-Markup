# Index
[[__TOC__]]

 
## Simulate error
```
getLookups(): Observable<Model> {
  return this.http.get<Model>('/fake-endpoint-that-fails');
}
```
