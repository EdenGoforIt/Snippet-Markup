# index

-[Angular Connect](https://www.youtube.com/watch?v=CD_t3m2WMM8&t=1523s)

- [index](#index)
- [Advanced Form](#advanced-form)
  - [template driven](#template-driven)
  - [Reactive Form](#reactive-form)
  - [custom form control](#custom-form-control)
    - [required attribute](#required-attribute)
    - [Error Message](#error-message)

# Advanced Form

## template driven

template driven form is implicitly created `NgForm` if you add `<form>` tag

```
<form>  // type of NgForm
   <input name="1" ngModel>
</form>

```

## Reactive Form

Corresponding NgForm from the template driven form is `FormGroupDirective`

```
<form [formGroup]="form"> //[formGroup] will create FormGroupDirective
    <input formControlName="1">
</form>

```

## custom form control

- need to use `controlValueAccessor`, an interface working as a bridge between `form-control` and `DOM`

- controlValueAccessor interfaces

```
writeValue => write value to display in the view
registerOnChange => callback for value changes in DOM
registerOnTouched => callback for toggling touched property
setDisabledState => enable/disable element in view
```

```
<form>
  <input type="test" name="one" ngModel />
  <required-text name="city" ngModel ></required-text>
</form>

```

```
// in the required-test field
<input type="text" #input (input)="onChange($event.target.value)" (blur)="onTouched() [disabled]="disabled">

// in the component

// provide component as value accessor
// `form control directives` such as `ngModel` or `formControlName` can see your value accessor here by a provider
// `ngModel` or `form-control` inject `ValueAccessor` token, that's why we need to provide a token
providers:[{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: RequiredTextComponent
}]

@ViewChild('input') input:ElementRef;
writeValue(value:any){
    this.input.nativeElement.value = value;
}

registerOnChange(fn:(value:any) => void){
    this.onChange = fn;
}

registerOnTouched(fn:()=>void){
    this.onTouched = fn;
}
setDisabledState(disabled:boolean){
    this.disabled = disabled;
}
```

### required attribute

implement validator interface
instead of just adding required like below

```
<input required>
```

do this because it would not work as you expected it would

```

 validate(ctrl: AbstractControl){
    return Validators.required(ctrl);
 }
```

and provide `NG_VALIDATOR` to be able to `form control directives` such as `ngModel` or `formControlName`,
inject validators

```
providers: [
    provide:NG_VALIDATOR,
    multi:true,
    useExisting: RequiredTextComponent
]

```

### Error Message

export `NgModel` directive, then form can access `ngModel`

template driven

```
<required-text  ngModel #dir="ngModel">
```

for reactive
use NgControl (super class of NgModel, FormControlDirective and FormControlName directives)
FormControlDirective?

> Synchronizes a standalone FormControl instance to a form control element.

> Self@ If we decorate the parameter with @Self(), it’s like there was only the first step of the previously discussed default behaviour. The only place allowed to find the injector is the component itself (3.). If it isn’t defined there…

> @Optional() decorator and in such case of no provider found, no error will occur.

> @Host() decorator makes Angular to look for the injector on the component itself, so in that regard it may look similar to the @Self() decorator (7.). But that’s actually not the end: if the injector is not found there, it looks for the injector up to its host component.

```
<form>
    <required-text formControlName="city" >
</form>

// in the component

providers: [
  // in this case, do not provide `ngValueAccessor` and `ngValidators` because of the circular dependencies

]

constructor(@Self() public contrlDir: NgControl){
    controlDir.valueAccessor = this; // provide value accessor here
}
// validators here
ngOnInit(){
  const control = this.controlDir.control;
  control.setValidators(Validators.required);
  control.updateValueAndValidity();
}
```
