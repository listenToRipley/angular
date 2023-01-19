# Welcome!

Learning Angular from [Udemy.](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655598#overview)

## Table of Contents

1. [My first application](./my-first-app/README.md)

## Using Angular

Uses Typescript.

### Setting up new project

`ng new new-project-name`

Optional, include `--no-strict`

You will be asked if you want to include routing and which style sheet format you want to use.

### Bring up a Server

`ng serve`, creates a working server where we can test information.

Default port will be provided when created, usually 4200.

### Navigating Application

The display for all content ends at the src/index.html. Content that is generated is provided inside of the body of that doc.

The content that is generated though src/app/app.component.html.

To provide more dynamic fields information should be provided to src/app/app.component.ts.

If you want to include additional Angular modules they will need to be imported and provided inside src/app/app.module.ts
