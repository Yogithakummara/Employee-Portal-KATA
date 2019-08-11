import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import{GridModule} from './grid/grid.module';
import{RegistrationModule} from './registration/registration.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule,ButtonsModule } from 'ngx-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations:[
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    GridModule,
    RegistrationModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
