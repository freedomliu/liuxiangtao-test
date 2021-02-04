import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {TestDirective} from "./directive/test.directive";
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import {ExeUnlessDirective} from "./directive/exe-unless.directive";
import { FormTestComponent } from './form-test/form-test.component';
import { Connect0Component } from './connect0/connect0.component';
import { Connect1Component } from './connect1/connect1.component';
import { Connect2Component } from './connect2/connect2.component';
import {MessageService} from "./service/message.service";
import {ProductService} from "../shared/product.service";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent,
    TestDirective,
    DirectiveTestComponent,
    ExeUnlessDirective,
    FormTestComponent,
    Connect0Component,
    Connect1Component,
    Connect2Component
  ],
  providers: [{provide: MessageService, useClass: MessageService}],
})
export class CatalogModule { }
