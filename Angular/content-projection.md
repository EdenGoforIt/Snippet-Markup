- when the form is almost the same except some contents

### First Parent Component

```
<auth-form>
   <h3>Login Form</h3>
<auto-form>

```

### Second Parent Component

```
<auth-form>
   <h3>Register Form</h3>
</auth-form>
```

### Child Component

```
<form (ngSubmit)="onSubmit()" #form="ngForm">
    <ng-content></ng-content> // this will render 'Register Form' or 'Login' form depending on the parent component
    <input type="email">
</form>
```
