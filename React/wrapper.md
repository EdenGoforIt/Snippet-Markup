# Index

[[__TOC__]]

## To make a wrapper component

we need to add `props.children` inside the <div>

```
import './Card.css';
function Card(props) {
	return <div className='card'>{props.children}</div>;
}
export default Card;
```

Then do this, then ExpenseItem will become `props.children`

```
<Card>
	<ExpenseItem />
</Card>

```

## Wrapper Class to inherit classes from a child component

```
const classes = 'card '+ props.classNames;  // this is reserved for class Names
return (<div className={classes}> </div>);
```

By doing this we are making sure the child component css style applied to the wrapper as we have applied `card` class and the nested classes will be applied as nested.


