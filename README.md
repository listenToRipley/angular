# Welcome!

Learning Angular from [Udemy.](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655598#overview)

## Table of Contents

1. [My first application](./my-first-app/README.md)
2. [Assignment 2](./assign2/README.md)
3. [Assignment 3](./assign3/README.md)
4. [Project 1](./basicProject/README.md)
5. [Debugging](./debugging/README.md)
6. [Databinding](./databinding/)

## These projects

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

This section covers the starting process for these projects

### Bring up a Server

`ng serve` creates a working server where we can test information.

A default port will be provided when created, usually 4200.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Setting up a new project

`ng new new-project-name`

Optional, include `--no-strict`

You will be asked if you want to include routing and which style sheet format you wish to use.

Set up to use [bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

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

Run `ng generate component componentName` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

There is also a shorthand.

`ng g c newComponentName`

This will create a folder inside [app](./my-first-app/src/app/) with the provided new component name and a css, html, ts, and spec.ts files.

spec.ts is used for testing. It is not a required file.

To exclude the creation of testing files, include `--skip-tests` after the component name.

This should also auto-add your file to the [module](./my-first-app/src/app/app.module.ts), but make sure you verify the registration.

You can specify the path (to make nested components) by providing the relative path location. Relative as it will start in the `app` folder. Example `ng g c relativeFolder/newComponentName --skip-tests`

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

[See databinding](./databinding/README.md)