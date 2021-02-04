import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DirectiveTestComponent} from "./directive-test/directive-test.component";
import {FormTestComponent} from "./form-test/form-test.component";
import {Connect0Component} from "./connect0/connect0.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, children:[
      {path: '', component: DirectiveTestComponent},
      {path: 'form', component: FormTestComponent},
      {path: 'connect', component: Connect0Component},
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
