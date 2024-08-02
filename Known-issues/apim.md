## Pipeline can't access kudu url

- Use a pool having a gateway

## validate-azure-ad-token issue

when validatin az token, with managed identtiy setup with azure function
make sure that validate-azure-ad-token comes first and then managed identity otherwise
apim will validate managed identity.

use validate-jwt for debugging because this policy can give you what value is expected in the app setting error



