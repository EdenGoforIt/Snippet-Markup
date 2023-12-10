# Index



## when show loading with data with async

as we do not know when we get meals as it's asynchronous, we can put a loader with else statement
```
<div *ngIf="meals$ | async as meals; else loading">
    // meals here
</div>
<ng-template #loading>
    // loader here
</ng-template>

```