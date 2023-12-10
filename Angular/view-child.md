# Index

# Table Of Contents

- [Index](#index)
- [Table Of Contents](#table-of-contents)
- [Get Component](#get-component)
- [Get Native Element](#get-native-element)

# Get Component

```
// when single
@ViewChild(AuthComponent) authComponent = PupComponent;
// when there are multiple
@ViewChildren(AuthComponent) authComponents = QueryList<AuthComponent>;

if(this.authComponents)
{
    this.authComponents.forEach((authCom)=>{
        authCom.days = 30;
    });
}

```

# Get Native Element

```
// html
<input type="email" name="email" ngModel #email>

// component
@ViewChild("email") email: ElementRef;

```
