> Initial Model is not perfect but it evolves from refinement
> Layered Architecture such as having domain and repository layers
> analysis model is a end result based on the analysis of the business domain without consideration of the software development
> The essential principle of the layers is that any elements of the layer depends only on other elements in the same layer. Communication upward must pass through some indirect mechanism

Four Conceptual Layers - most successful architecture use normally

- UI or presentation layer
- Application layer -> no business logic, coordinates tasks and delegates work to collaborations of domain objects
- Domain Layer
- Infrastructure Layer - message sending, persistence for the doamin, drawing widgets for the UI

some people don't make a sharp distinction between the UI and application layer.

User Interface -> Transfer Controller
Application -> FundsTransferService
Domain -> Account
Infrastructure -> Unit of work & OR Manager (database)

For example, if an application needs to send an e-mail, some message-sending interfaces can relocated in the infrastructure layer and the application layer elements can request the transmission of the message.

(Page 66).



67page 
