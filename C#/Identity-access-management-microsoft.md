Identity and Access Management (IAM)

Identity Federation - allow other users who have already password somewhere can get access to the system.

Oauth2

- open-standard identity manamagent protocol

Open ID

- With the release of the OpenID Connect (which uses public-key encryption), OpenID became a widely adopted authentication layer for OAuth. Like SAML, OpenID Connect (OIDC) is widely used for single sign-on (SSO), but OIDC uses REST/JSON instead of XML. OIDC was designed to work with both native and mobile apps by using REST/JSON protocols. The primary use case for SAML, however, is web-based apps. To learn more, read about OpenID Connect protocol.

Security Assertion Markup Language (SAML)

- SAML is an open standard utilized for exchanging authentication and authorization information between, in this case, an IAM solution and another application. This method uses XML to transmit data and is typically the method used by identity and access management platforms to grant users the ability to sign in to applications that have been integrated with IAM solutions. To learn more, read SAML protocol.

Microsoft Entra ID is a centralized identity provider in the cloud

OAuth versus OpenID Connect: The platform uses OAuth for authorization and OpenID Connect (OIDC) for authentication.

You can even both authenticate a user (through OpenID Connect) and get authorization to access a protected resource that the user owns (through OAuth 2.0) in one request

The platform uses both OpenID Connect and SAML to authenticate a user and enable single sign-on. SAML authentication is commonly used with identity providers such as Active Directory Federation Services (AD FS) federated to Microsoft Entra ID, so it's often used in enterprise applications. OpenID Connect is commonly used for apps that are purely in the cloud, such as mobile apps, websites, and web APIs.

The Microsoft identity platform is the authorization server. Also called an identity provider or IdP,

### Token

**Access tokens** contain the permissions the client has been granted by the authorization server

**ID tokens** are issued by the authorization server to the client application. Clients use ID tokens when signing in users and to get basic information about them.

The client uses a **refresh token**, or RT, to request new access and ID tokens from the authorization server. Your code should treat refresh tokens and their string content as sensitive data because they're intended for use only by authorization server.

## app registration

**application ID** and **client ID**, this value is assigned to your app by the identity platform

**Redirect URL** The authorization server uses the redirect url to direct reßsource owner's user-agent (web browser, mobile app) to another destination after completing their interaction
