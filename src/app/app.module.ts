import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { CategoryModule } from './category/category.module'
import { ClientesService} from './clientes.service'
import {HttpClientModule }from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component'
import { AuthService } from './auth.service';
import { LivrosModule } from './livros/livros.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    CategoryModule,
    HttpClientModule,
    FormsModule,
    LivrosModule
  ],
  providers: [ 
    ClientesService,
    AuthService
  ],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
