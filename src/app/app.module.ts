import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientesModule } from './clientes/clientes.module';
import { CategoryModule } from './category/category.module'
import { ClientesService} from './clientes.service'
import {HttpClientModule }from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    CategoryModule,
    HttpClientModule
  ],
  providers: [ ClientesService],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
