# API Management

- integrate multiple services and can use API gateway to aggregate the result as well
- Components: Azure Portal, Developer Portal, API Gateway
- Easy integration for Azure Active Directory (ADD) for b2b or b2c federated authentication
- Caching, API documents, IP filtering
- Once the contract is understood, we can configure mock in APIM for front-end development

## API Gateway

- verify api key, security token, and certificates
- Cache the response
- Throttling
- Logging

## Scenario

- APIM ask for SSL certificate from Azure KeyVault using Managed Service Identity (MSI)

## Redis vs Built in

- more data to cache
- no dependencies to api management update thus not loosing data
- fine tune

## Product

- Logical collection of API that can be managed, distributed and consumged together.
