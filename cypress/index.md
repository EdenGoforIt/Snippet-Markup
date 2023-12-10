# index

- unit testing, integration testing and E2E testing
- describe wraps unit tests in a single file
- Cypress run directly on the browser
- `it` is a one unit test
- normally one `describe` in one `file`
- all browsers support window object (browser's window)
- page object pattern (`Page Object Model`) promotes code reusability and keeps tests clean and readable
- `App Actions` expose Cypress's superpowers by allowing you direct access to the internal implementation of your front-end application
- use `commands` and `plugins` to create a new command and extend or modify behaviors.

- [index](#index)

  - [how to start](#how-to-start)
  - [User Actions](#user-actions)
  - [assertions](#assertions)
  - [installation](#installation)
  - [selector](#selector)
  - [commands](#commands)

  ## best practices

  https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/blogs__e2e-api-testing/cypress/e2e/example_spec.cy.js

## how to start

- npm run start
- npx cypress open

## User Actions

```
// types
click, dblclick, type, clear, focus, blur, check and select

.blur() or .focus()

select('value');

check('value');

```

## assertions

```

cy.get('li.selected').should('have.length', 1); //length

cy.get('input#name').should('not.have.class','disabled'); //class

cy.get('textarea#comment').should('have.value', 'Great!'); // value

cy.get('button#add-comment').should('be.visible'); // visibility

cy.get('span[name="loading"]').should('not.exist'); // existence

cy.get('.danger').should('have.css', 'color', '#FF0000'); // color


cy.get('a.more-details').should('have.class', 'btn')
                        .and('have.attr', 'href');   // multiple assertions



```

## installation

- ng add @cypress/schematic
- npx cypress open

## selector

```

cy.get('input'); // never

cy.get('.form-input'); // never

cy.get('#someId"); // not okay, dependency with labels (another purpose then style)

cy.get('input[name="adventure"]') // not okay

cy.get('input[data-cy="adventure"]') // this is okay, called data attribute


```

## commands

Parent (can be executed independently)

- visit(), get()

Child (can be executed after parent commands executed)

- click(), type(), should()

Dual (both parent and child work)

- contains()
