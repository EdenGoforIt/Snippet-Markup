- when the form is almost the same except some contents


- [Normal Way](#normal-way)
    - [First Parent Component](#first-parent-component)
    - [Second Parent Component](#second-parent-component)
    - [Child Component](#child-component)
- [Injection Slot way (with html element name)](#injection-slot-way-with-html-element-name)
    - [First Parent Component](#first-parent-component-1)
    - [Second Parent Component](#second-parent-component-1)
    - [Child Component](#child-component-1)
- [Injection Slot (Component Inject)](#injection-slot-component-inject)
    - [First Parent Component](#first-parent-component-2)
    - [Second Parent Component](#second-parent-component-2)
    - [Different Component (auth-remember)](#different-component-auth-remember)
    - [Child Component](#child-component-2)

# Normal Way

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

# Injection Slot way (with html element name)

### First Parent Component

```
<auth-form>
   <h3>Login Form</h3>
   <button type="submit" (click)="login" >Login</button>
<auto-form>

```

### Second Parent Component

```
<auth-form>
   <h3>Register Form</h3>
   <button type="submit" (click)="register" >Register</button>
</auth-form>
```

### Child Component

```
<form (ngSubmit)="onSubmit()" #form="ngForm">
    <ng-content select="h3"></ng-content>
    <input type="email" />
    <input type="text" />
    <ng-content select="button"></ng-content>
</form>
```

# Injection Slot (Component Inject)

### First Parent Component

```
<auth-form>
   <h3>Login Form</h3>
   <auth-remember (change)="onChecked()"></auth-remember>
   <button type="submit" (click)="login" >Login</button>
<auto-form>

```

### Second Parent Component

```
<auth-form>
   <h3>Register Form</h3>
   <button type="submit" (click)="register" >Register</button>
</auth-form>
```

### Different Component (auth-remember)

```
<label>
      <input type="checkbox" (change)="onChecked($event.target.checked)">
      Keep me logged in
</label>
```

### Child Component

This will render `auth-remember` component only for `login` component

```
<form (ngSubmit)="onSubmit()" #form="ngForm">
    <ng-content select="h3"></ng-content>
    <input type="email" />
    <input type="text" />
    <ng-content select="auth-remember"></ng-content>
    <ng-content select="button"></ng-content>
</form>
```
