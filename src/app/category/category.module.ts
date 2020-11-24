import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AcaoComponent } from './acao/acao.component';
import { AventuraComponent } from './aventura/aventura.component';


@NgModule({
  declarations: [AcaoComponent, AventuraComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  exports:[
    AcaoComponent,
    AventuraComponent
  ]
})
export class CategoryModule { }
