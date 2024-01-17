# index

- [Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Example](https://github.dev/jasontaylordev/CleanArchitecture)
- [Example with DDD](https://www.youtube.com/watch?v=5_un3PUER8U&ab_channel=AmichaiMantinband)
- [Udemy](https://github.com/trevoirwilliams/HR.LeaveManagement.CleanArchitecture-dotnet5)

## summary

- it feels like this architecture is an extension of what he has collated such as SOLID principles
- it emphasizes the separation of concerns having different by dividing software into distinct layers.

- The word “architecture” is often used in the context of something at a high level that is divorced from the lower-level details, whereas “design” more often seems to imply structures and decisions at a lower level

```
Presentation / Infrastructure
		Application
  		     	Domain
```

- Domain - enterprise-wide logic and types
- Application - business logic and types
- Infrastructure - all external concerns
- presentation / infrastucture only depends on Application
- presentation / infrastructure can be replaced easily

### Domain Layer

- Entities
- Value Objects
- Enumeration
- Logic
- Exception

- Avoid data annotation
- Value object when required for complicated primitive types
- Create domain exceptions
- you can provide nums as name and value pair from the server by using Getvalues, Cast, Select

### Application Layer

- Interfaces/models
- Logic

- Controller shouldn't contain any application logic
- CQRS, including mapper, validator
- Independent of infrastructure

### Infrastructure

- persistence
- identify
- file system

Do we have to use unit of work and repository (design patterns)?

- EF core insulates your code from db changes
- dbcontext is actually unit of work
- DbSet acts as a repository
- from efcore no need to implement it. Ef core has features for unit testing without repoistories
