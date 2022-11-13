# index

- [index](#index)
  - [resources](#resources)
  - [WHY](#why)
    - [Immutability](#immutability)
    - [this.store.select vs this.store.pipe(select)](#thisstoreselect-vs-thisstorepipeselect)

## resources

- [NGRX best practices github](https://github.com/rainerhahnekamp/ngrx-best-practices/blob/01-load-status/apps/eternal/src/app/customer/customer/customer.component.ts)
- [NGRX best practice in stackblitz](https://stackblitz.com/github/arumuganainar73/NgRx-State-Management-with-Unit-Testcase?file=src%2Fapp%2F%2Bstate%2Fuser.effects.spec.ts)
- [NGRX angular app best practices with folder structures](https://github.com/zd333/ng-conv)
- [NGRX big example github](https://github.dev/bbachi/Angular5Sample)
- [Duncan](https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/introduction)

## WHY

### Immutability

> Immutable state means its value cannot be changed once it's created.

### this.store.select vs this.store.pipe(select)

`this.store.pipe(select())` is more preferred;

- [Source])(https://stackoverflow.com/questions/68919792/angular-ngrx-difference-between-select-and-pipeselect)
