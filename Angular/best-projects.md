# Index

- Paradigm and Pattern = An approach to the code
- Use @ngrx-component-store for managing the state at the component level (normally subject to behaviourSubject, if more complext, use this store)
- Use Reactive Form
- ALmost all components must have OnPush Change Detection

## best practices

- (best practice)[https://github.com/andredesousa/angular-best-practices]

## ngrx

- (list of best practices such as effect)[https://dev.to/this-is-angular/ngrx-tips-i-needed-in-the-beginning-4hno#create-reusable-reducers]
- (ngrx & LocalStorage & movies)[https://github.dev/bbachi/Angular5Sample]
- (customer & holiday)[https://github.dev/rainerhahnekamp/ngrx-best-practices/tree/master/apps/eternal/src/app/customer/customers]
- (Dunkin)[https://angular-training-guide.rangle.io/state-management/ngrx/modifying_your_application_state_by_dispatching_actions]

## testing

- (testing NGRX project)[https://issuecloser.com/blog/testing-an-ngrx-project#13]
- (container and presentational )[https://www.simars.io/angular-test-components-unit-shallow-deep/]

## ngrx with local storage

- (ngrx-store-localstorage)[https://stackblitz.com/edit/ngrx-localstorage-128-fix-gzslmg?file=src%2Fapp%2Fstore%2Fmetareducers.ts,src%2Fapp%2Ffeature2%2Fstore%2Fmetareducers.ts]'

## TypeScript

- (Coding Guide for naming, etc)[https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines]

## architecture

- feature = data + store + container + presentation

### presentation component

- only @Input() @Output and reactive form
- no logic & no state (no this except input and output)
