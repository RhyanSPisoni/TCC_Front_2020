import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { Incriveis2Component } from './incriveis2/incriveis2.component';
import { MonicaComponent } from './monica/monica.component';


@NgModule({
  declarations: [Incriveis2Component, MonicaComponent],
  imports: [
    CommonModule,
    LivrosRoutingModule
  ],
  exports: [
    Incriveis2Component,
    MonicaComponent
  ]
})
export class LivrosModule { }
