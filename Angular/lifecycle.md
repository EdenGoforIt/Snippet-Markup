# Index

- [Index](#index)
  - [OnChange](#onchange)
  - [DoCheck](#docheck)
  - [AfterContentInit](#aftercontentinit)
  - [AfterViewInit](#afterviewinit)
  - [add detection change after ngAfterViewInit](#add-detection-change-after-ngafterviewinit)
  - [selector vs ng-content](#selector-vs-ng-content)

[Useful Link](https://www.tektutorialshub.com/angular/afterviewinit-afterviewchecked-aftercontentinit-aftercontentchecked-in-angular/)

## OnChange

Angular detects any changes to `Input` property

## DoCheck

Run custom change detection

## AfterContentInit

- `ContentChild` and `ContentChildren` are resolved before this hook.
- After the **component's content** has been fully initialized and injected into `Components` View

## AfterViewInit

- `ContentChild` and `ContentChildren` are resolved before this hook.
- After the component's view and its child views complete initialization.

## add detection change after ngAfterViewInit

- `ngAfterViewInit` happens almost at the end of the life cycle.

```
ngAfterViewInit(){
    (ContentChild = this.message)
    this.message.days = 30;
    this.cdr.detectChanges();
}

```

## selector vs ng-content

> selector => ViewChild, ViewChildren

> ng-content => ContentChild, ContentChildren

1. can work interchangeably?

In View

```
<ng-content select="auto-remember"><ng-content>
<auth-message></auth-message>
```

In Component

```
@ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;
@ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
```
