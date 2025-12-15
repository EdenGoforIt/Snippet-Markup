# Index

# Pipeline

## Pipeline showing Kudu url issue

The issue arises from the combination of the service connection and the agent pool. During a release or build, the agent pool attempts to access the Kudu SCM endpoint in order to configure environment settings. Since this endpoint is only reachable within the App Service Environment (ASE) network, a self‑hosted agent must be added to that pool to complete the deployment successfully.

The error message typically appears as:

```
##[error]Failed to deploy web package to App Service.
##[warning]Can't find loc string for key: KuduStackTraceURL
##[error]KuduStackTraceURL https://$function:***@function.scm.test.appserviceenvironment.net/api/vfs/LogFiles/kudu/trace
##[error]Error: Error: Failed to deploy web package to App Service. Error: getaddrinfo ENOTFOUND dev1-mpi-oni-vwr-fa-ae-01.scm.dev1-mpi-eip-core-ase-ae-01.appserviceenvironment.net
```

**Solution**
Add Agent pool that can access kudu url. 
