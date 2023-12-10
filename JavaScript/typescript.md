# index

- TypeScript is a superset of JavaScript that compiles to plain JavaScript

- [index](#index)
  - [Arrow Function and Implicit return](#arrow-function-and-implicit-return)
  - [default function parameter](#default-function-parameter)
  - [Object literal](#object-literal)
  - [Rest Parameters](#rest-parameters)
  - [object spread operator](#object-spread-operator)
  - [destructuring array and object](#destructuring-array-and-object)
  - [string literal](#string-literal)
  - [Implicit vs Explicit Type](#implicit-vs-explicit-type)
  - [void](#void)
  - [never type](#never-type)
  - [Union Type](#union-type)
  - [Literal Type](#literal-type)
  - [Function Type](#function-type)

## Arrow Function and Implicit return

```
const newPizzas = pizzas.map(function(pizza){
    return pizza.name
});

// can be simplified with implicit return without `{}`
const newPizzas = pizzas.map(pizza => pizza.name);

```

## default function parameter

```
function(a = 5, b){
    return a * b;
}
```

## Object literal

> a literal is a fixed value; var five = 5;
> in OOP,

```
var new_dog = {
    name: "doggy",
    good_dog: false
};
```

```
const pizza = {
name: 'test'
};

const order = {pizza};
```

## Rest Parameters

```
function sumAll(...arg){
    return arr.reduce(pre,next)=> prev+ next);
}

const result = sumAll(1,2,3,4,5);

```

## object spread operator

```
const pizza = {
    name: 'peperoni'
}

const order = {...pizza};
//same as
const order = Object.assign({}, pizza);


```

## destructuring array and object

```
function order({name: pizzaName}){
    console.log(pizzaName);
    return {pizzaName}
}

const {pizzaName} = order('peperoni') ;

const toppings = ['onions', 'bacon'];

const [first, second]= toppings;
```

## string literal

Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

```
const pizzaName = 'peperoni';
const test = `this is {pizzaName}`;

```

## Implicit vs Explicit Type

```
let implicitString = 'test';
let explicitString: string = 'test';

```

## void

NO TYPE will be returned

## never type

- Value will never occur
- Never going to return value
- Something is never going to occur. Void can have `undefined` or `null` but never cannot have any value

```
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

```

## Union Type

we have one of several types

type test = ThisType | ThatType;

## Literal Type

A literal is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.

There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.

```
function selectSize(size: 'small' | 'medium'){
    return size;
}

selectSize('small');

```


## Function Type

named function
```
function sumOrder(){
    
}
```
