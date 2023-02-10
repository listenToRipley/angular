import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; //must import the components that are provided in the declaration.
//the imported component does not need to include the type of the file since it will allow access to all types under the same name.

//allows to bundle into packages.
//gives angular information features/components
@NgModule({ //a decorator
  declarations: [
    AppComponent,
    ServerComponent //"registers" the component. It is part of the application.
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //telling angular which component should you start with.
})
export class AppModule { }
