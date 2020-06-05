import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomepageComponent } from './components/my-homepage/my-homepage.component';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { MyLoginComponent } from './components/my-login/my-login.component';
import { MyRegisterComponent } from './components/my-register/my-register.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomepageComponent,
    MyNavComponent,
    MyLoginComponent,
    MyRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
