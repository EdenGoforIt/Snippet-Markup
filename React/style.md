# Index

[[__TOC__]]

## how many different ways?

- Styled components
- CSS Module

## Inline Style

### conditional

**Case 1**

```

return <div style={{ color: !isValid: 'red': 'black'}}></div>

```

**Case 2**

```

return <form>
    <div className={'form-control' ${!isValid ?'invalid': ''}}></div>
</form>

```

## How to apply css to the wrapper component

In the parent or wrapper component

```
<Card className="styles.card"></Card>

```

In the card component

```
const Card = (props) =>{
    return <div className={`{props.className}`}></div>
};

```

Remember, you are using a `className` as the wrapper component has defined the property as `className`. If the parent component sending `cssClass` then the `Card` component should use `{props.cssClass}`.
