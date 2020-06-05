import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLoginComponent } from './components/my-login/my-login.component';
import { MyRegisterComponent } from './components/my-register/my-register.component';
import { MyHomepageComponent } from './components/my-homepage/my-homepage.component';

const routes: Routes = [
  {path:'', component: MyLoginComponent},
{path:'my-register', component: MyRegisterComponent},
{path:'my-homepage', component: MyHomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
