import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [ClientesFormComponent, EditarComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule

  ], exports:[
    ClientesFormComponent,
    EditarComponent
  ]
})
export class ClientesModule { }
