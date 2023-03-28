# index

- [index](#index)
  - [component store](#component-store)
  - [resources](#resources)
  - [WHY](#why)
    - [Immutability](#immutability)
    - [this.store.select vs this.store.pipe(select)](#thisstoreselect-vs-thisstorepipeselect)
  - [nested object](#nested-object)

## component store

-   [using facade](#https://ng-journal.com/blog/2022-12-08-ngrx-component-store-meets-facade-pattern/)

## resources

-   [NGRX best practices github UK guy](https://github.com/rainerhahnekamp/ngrx-best-practices/blob/01-load-status/apps/eternal/src/app/customer/customer/customer.component.ts)
-   [NGRX best practice in stackblitz](https://stackblitz.com/github/arumuganainar73/NgRx-State-Management-with-Unit-Testcase?file=src%2Fapp%2F%2Bstate%2Fuser.effects.spec.ts)
-   [NGRX angular app best practices with folder structures](https://github.com/zd333/ng-conv)
-   [NGRX big example github](https://github.dev/bbachi/Angular5Sample)
-   [Duncan](https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/introduction)

*   [ngrx or state management workflow](https://www.codemag.com/Article/1811061/Angular-and-the-Store#:~:text=The%20ngrx%2Fstore%20module%20allows,Feature%20modules%20in%20the%20application.)

## WHY

### Immutability

> Immutable state means its value cannot be changed once it's created.

### this.store.select vs this.store.pipe(select)

`this.store.pipe(select())` is more preferred;

-   [Source])(https://stackoverflow.com/questions/68919792/angular-ngrx-difference-between-select-and-pipeselect)

## nested object

-   [use spread for the nested object and tell you why spread operator is not copying the nested object](https://dev.to/mlgvla/javascript-using-the-spread-operator-with-nested-objects-2e7l)
-
