# index

# Interface vs Abstract

- a mechanism for an abstraction and defining contracts for classes.
- Abstract class can be instantiate and used for a base class
- Abstract method must be overriden by the derived class
- Normal method can have implementation
- Interface can have only signatures members and the derived class must implement it

## Abstract

Virtual Method: Virtual methods are used when the abstract class wants to provide a default implementation that can be optionally overridden by derived classes.
Abstract Method: Abstract methods are used when the abstract class wants to enforce derived classes to provide their own implementation for a specific behavior.

# Value vs Reference Type

- Reference Type variables are stored in the heap while Value Type variables are stored in the stack.

# Four pillars of OOP

- Encapsulation: restricting direct access to the internal state of the object
- Abstraction: defining essential characteristics and behaviours of an object while hiding unnecessary details.
- Polymorphism: Dog:Animal, Cat Animal: var cat = new Animal();
- Inheritance: Car: Vehicle, Motorcycle:Vehicle

# Composition over inheritance. why?

# Modifier

Access Modifiers:

public: The public modifier allows the element to be accessed from any code within the same assembly or project.
private: The private modifier restricts access to the element within the same class or containing type.
protected: The protected modifier allows access within the same class or derived classes.
internal: The internal modifier limits access to the same assembly or project.
protected internal: The protected internal modifier allows access within the same assembly or project, as well as in derived classes.
Non-access Modifiers:

static: The static modifier indicates that a member belongs to the type itself rather than an instance of the type.
sealed: The sealed modifier prevents a class from being inherited.
abstract: The abstract modifier indicates that a class or member is incomplete and must be implemented in derived classes.
virtual: The virtual modifier allows a method or property to be overridden in derived classes.
override: The override modifier is used to provide a new implementation of a virtual method in a derived class.
readonly: The readonly modifier specifies that a field can only be assigned a value at the time of declaration or within a constructor.
const: The const modifier defines a constant value that cannot be modified.
