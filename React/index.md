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
