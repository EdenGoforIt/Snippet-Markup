# Index

- abstract class can be used to factor out some implementation (sort of) where as the interface can be used as nameable (generic no relations like abstrac class)
- interfaces - getName() vs abstract class calculateSales()
- inheritance and compposition can show the relationships between objects
- Compisition can have aggregation which represents relationships as a whole, and associations present both the whole and parts.
- Computer as an example, with monitors, keyboard, each represents the whole (aggregation) of a cmoputer
- Aggregation is a complex object composed of other objects
  = Association is used when one objects wants another object to perform a service for it
- Association is a relationshiup between two classes where one class use another

> To sum it up association is a very generic term used to represent when a class uses the functionalities provided by another class. We say it's composition if one parent class object owns another child class object and that child class object cannot meaningfully exist without the parent class object. If it can then it is called Aggregation.

> The relationship between the Owner and Dog is association because the owner is clearly not part of the Dog, or vice versa, so it's not aggregation. The dog needs a walk from the Onwer
- Composition represetsn theinteractions between various objects
