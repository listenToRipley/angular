# Databinding 

Communication between typescript components/business logic and the template.

The only requirement for "string interpolation" is that it can resolve itself into a string. You cannot provide multiline logic.

You can identify it since you will see it `{{between double curly brackets}}`

## Property Binding

Provide a specific state to an HTML element through a method/state from your typescript.

`[shows property binding in the html]="followedTheVariableName"`

You can see examples of this in the [servers files](./my-first-app/src/app/servers/)

### Custom Property Binding



## Event Binding

Instead of using HTML events like `onClick`, you would use `(functionName)="methodFromTSFile"` to provide the event functionality.

You can pass the "event" into the associated method by providing `$event` as an argument to the method.

You should provide specificity to typescript by going deeper into the element types of HTML.

## Two-Way Binding

Event binding + Property Binding = `[(two way binding!)]`

Must have ngModel and FormModule imported on [module.ts](./my-first-app/src/app/app.module.ts) in order for most of this to function.

You will see [an example of this here](./my-first-app/src/app/servers/servers.component.html)

## Which Binding?

Use Databinding for string output.

Property binding for variable output/ functionality.

Refrain from mixing the two! It will break the functionality.

Events are used for the results of expected action taken on a specific element.

[List of Properties](https://developer.mozilla.org/en-US/docs/Web/API/Element)

[List of Events](https://developer.mozilla.org/en-US/docs/Web/Events)

## Directives

Instructions to the DOM. Usually, an attribute is within the component. You will provide these selector options similar to how you create Components. There are even built-in logical operators that allow us to create functionality.

### ifs

`*ngIf="condition, boolean"`, provides if statement.

There is an else option which used the tag element of `ng-template` with a local reference `#Reference`. Then inside your `ngIf` condition, you would include else and the reference name. [See example](./my-first-app/src/app/servers/servers.component.html)

### styles

`ngStyle` styling content. Best practice is to use [property binding](#property-binding). This will allow dynamic styling based on variables.

[Examples](./my-first-app/src/app/server/server.component.html)

### classes

`ngClass` a way to add CSS classes.

[See example](./my-first-app/src/app/server/server.component.html)

### for

`*ngFor=let name of list`

[See example](./my-first-app/src/app/servers/servers.component.html)

We don't pass information at this point, but can generate based on standard information.
