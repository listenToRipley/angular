import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component'; //must import the components that are provided in the declaration.
//the imported component does not need to include the type of the file since it will allow access to all types under the same name.
// webpack will provide the type for us.

//allows to bundle into packages.
//gives angular information features/components
@NgModule({ //a decorator
  declarations: [
    AppComponent, //"registers" the component. It is part of the application.
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //telling angular which component should you start with.
})
export class AppModule { }
