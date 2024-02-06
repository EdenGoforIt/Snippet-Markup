# Anti-corruption layer pattern

[Microsoft](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer)

> How to work around legacy application. Implement a facde or adapter layer between different subsystems that don't share the same semantics. The layer translates requests that one subsystem makes to the other subsystem. Two or more subsystems have different semantics, but still need to communicate. A concrete illustration in the realm of real-world APIs involves the task of updating data in the old system when the new system data is updated using an ACL (Access Control List). In this scenario, the data is transformed in the ACL Service to a format comprehensible to the legacy system, facilitating seamless communication between the two systems.

## Circuit Breaker

[Microsoft](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker)

> The Circuit Breaker pattern prevents an application from performing an operation that is likely to fail. An application can combine these two patterns by using the Retry pattern to invoke an operation through a circuit breaker. A circuit breaker acts as a proxy for operations that might fail. The proxy should monitor the number of recent failures that have occurred, and use this information to decide whether to allow the operation to proceed, or simply return an exception immediately.

- A circuit breaker acts as a proxy for operations that might fail. The proxy should monitor the number of recent failures that have occurred, and use this information to decide whether to allow the operation to proceed, or simply return an exception immediately.

- There are three states; Open, Half-Open and Closed. The relationship between each of which can be found from the link below.

### When to use

- To prevent an application from trying to invoke a remote service or access a shared resource if this operation is highly likely to fail.
- When getting data and server fails, waiting for 60 seconds might waste too much resources. Fail quick so that resources won't be wasted or blocked.

## Event Sourcing

## Gateway Routing Pattern

## Retry Pattern

## Sidecar Pattern

## Strangler Pattern

## Throttling Pattern

## Backend Frontend Pattern

## Publish/Subscribe Pattern

## Data-Driven Testing

## C4 Model

## API Gateway

## CQRS

## Outbox Pattern

## Multi-tenant

## Architecture Anti-pattners
