## Intoruction

- Object Substitution Principle
- Base class reference can hold a derived class object BUT not vice-versa.
- ()[https://vkontech.com/a-practical-intro-to-covariance-and-contravariance-in-c/]

## Invariant

Not changing

## Covariant (out generic modifier; derived class can go with the base class)

- With covariance, you can substitute a base class with a derived class for complex types. For example, if you have a generic interface like IEnumerable<T>, covariance would allow you to use IEnumerable<Derived> where IEnumerable<Base> is expected, because Derived is a subclass of Base. They are moving in the same direction.

- Covariance lets you to pass a derived type object where a base type object is expected Covariance can be applied on delegate, generic, array, interface, etc.

## ContraVariant (in generic modifier; base class can be used when derived clas is expected)

- Contravariance is the opposite. It allows you to use a base class where a derived class is expected, but typically in the context of input types like method parameters. For example, if you have a delegate like Action<T>, contravariance would allow you to use Action<Base> where Action<Derived> is expected. This is safe because a method that can handle the base class can also handle all of its derived classes.

- Contravariance is applied to parameters. It allows a method with the parameter of a base class to be assigned to a delegate that expects the parameter of a derived class
