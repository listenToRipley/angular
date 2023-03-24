# Welcome!

Learning Angular from [Udemy.](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655598#overview)

## Table of Contents

1. [My first application](./my-first-app/README.md)
2. [Assignment 2](./assign2/README.md)

## Using Angular

Uses Typescript.

### Setting up a new project

`ng new new-project-name`

Optional, include `--no-strict`

You will be asked if you want to include routing and which style sheet format you wish to use.

Set up to use [bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

### Bring up a Server

`ng serve` creates a working server where we can test information.

A default port will be provided when created, usually 4200.

### Navigating application

The display for all content ends at the src/index.html. Content that is generated is provided inside the body of that doc.

The content is generated through src/app/app.component.html.

To provide more dynamic fields, information should be provided to src/app/app.component.ts.

If you want to include additional Angular modules, they will need to be imported and provided inside src/app/app.module.ts

From the front, the back main.ts is the first code that runs. `AppModule` is what started off the process. This content will be cross-referenced within the app.module.ts. We have to know this content exists at inception.

```mermaid
flowchart TD
    A(/src) --> B
    B(main.ts) -->|inside main.ts| C["plateformBrowserDynamic().bootstrap(AppModule)"]
    C -->|inside index.html| D(contains app-root)
    D -->|path to import app-root| E{/app}
    E -->|info to display| F(fa:fa-file-code app.component.html)
    E -->|css| G(fa:fa-file-code app.component.css)
    E -->|app-root gets name| H(fa:fa-file-code app.component.ts)
    E -->|what should be accessable| I(fa:fa-file-code app.component.module.ts)
    H --> I
    I --> |finds components to access| C
   
```

### Components

A component refers to modular code that will resolve itself into a whole webpage related to a singular DOM. Example: A nav bar would be one component, while your footer would be another, and the main body is a mix of several different components.

The backbone of angular is components. They are a type of [Directives.](./README.md/#directives)

You start with the "app" component, which is the "root" of all components. Other children components will be nested inside of your root.

Application-related contents, such as new components, usually live inside the [app folder](`./my-first-app/src/app`) folder.

Each component should have its own folder, and best practice states that the folder should be titled after the component it contains.

The naming convention usually goes: `title.component.ts`; this will also be the component's name.

We use classes to create these components, known as *Decorators*. We must import the component type to help differentiate between a regular typescript class and an angular component class. The class use is what makes it possible to reuse these elements.

You usually will have your `ts` file and the related `html` file that will house the template `html` code.

In order to have access to the components, make sure they are "registered" within the [module file](`./my-first-app/src/app/app.module.ts`)

#### Requirements

All components must have a `selector` and `template`.

##### Selectors

You have multiple options when it comes to selectors. Providing a straight string to the element will be considered an html tag.

If it is inside [], it will be an attribute.

If you add a . to the front of the string, it will be a class element.

It is important to note that you will need to update your html file accordingly so it will display correctly.

Use the html tag, add the component as an attribute inside another tag, or include the class name inside the class attribute.

While the selector can be an attribute, but the attribute cannot be assigned to another component.

##### Templates

Either a `templateUrl` or `template`. The template will allow you to write inline html elements. Use backticks to allow for js functionality.

#### CLI Component Creation

`ng generate component newComponentName`

There is also a shorthand.

`ng g c newComponentName`

This will create a folder inside [app](./my-first-app/src/app/) with the provided new component name and a css, html, ts, and spec.ts files.

spec.ts is used for testing. It is not a required file.

This should also auto-add your file to the [module](./my-first-app/src/app/app.module.ts), but make sure you verify the registration.

#### Decorators

You can identify a decorator in code since it will have an `@` before the element.

You will have to configure these items by providing a JS object with the required information.

### Example

```mermaid
flowchart TD
    A{/app}
    A -->|display| B(fa:fa-file-code app.component.html)
    A --> C(fa:fa-file-code app.component.css)
    A -->|app-root gets name| D(fa:fa-file-code app.component.ts)
    C --> |import css| D
    A -->|allow access in index.html & main.ts| E(fa:fa-file-code app.component.module.ts)
    D --> E
    A--> |only requires 2 files| F{/newCompontent1}
    E --> B
    F --> G(fa:fa-file-code CSS)
    F --> H(fa:fa-file-code TypeScript)
    H --> |inside the TS file| I[* CCompontent_Sample_Decorator ]
    I --> E
    E --> J[route back for access to index.html and main.ts and will be bundled by webpack]
 
```

##### Compontent_Sample_Decorator

```Angular
@Component {[
        selector: 'app-new-compontent1
        templateUrl:./path/to/html or template:<selector></selector>
        may also include styleUrl: ['./css/path']
        
        export class ComponentName implements OnInit {
            constructor() {}
                ngOnInit() {
        }
    }'
]}
```

### Binding

#### Databinding

Communication between typescript components/business logic and the template.

The only requirement for "string interpolation" is that it can resolve itself into a string. You cannot provide multiline logic.

You can identify it since you will see it `{{between double curly brackets}}`

#### Property Binding

Provide a specific state to an HTML element through a method/state from your typescript.

`[shows property binding in the html]="followedTheVariableName"`

You can see examples of this in the [servers files](./my-first-app/src/app/servers/)

#### Event Binding

Instead of using HTML events like `onClick`, you would use `(functionName)="methodFromTSFile"` to provide the event functionality.

You can pass the "event" into the associated method by providing `$event` as an argument to the method.

You should provide specificity to typescript by going deeper into the element types of HTML.

#### Two-Way Binding

Event binding + Property Binding = `[(two way binding!)]`

Must have ngModel and FormModule imported on [module.ts](./my-first-app/src/app/app.module.ts) in order for most of this to function.

You will see [an example of this here](./my-first-app/src/app/servers/servers.component.html)

#### Which Binding?

Use Databinding for string output.

Property binding for variable output/ functionality.

Refrain from mixing the two! It will break the functionality.

Events are used for the results of expected action taken on a specific element.

[List of Properties](https://developer.mozilla.org/en-US/docs/Web/API/Element)

[List of Events](https://developer.mozilla.org/en-US/docs/Web/Events)

### Directives

Instructions to the DOM. Usually, an attribute is within the component. You will provide these selector options similar to how you create Components. There are even built-in logical operators that allow us to create functionality.
