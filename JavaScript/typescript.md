# index

- TypeScript is a superset of JavaScript that compiles to plain JavaScript

- [index](#index)
  - [Arrow Function and Implicit return](#arrow-function-and-implicit-return)
  - [default function parameter](#default-function-parameter)
  - [Object literal](#object-literal)
  - [Rest Parameters](#rest-parameters)

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
