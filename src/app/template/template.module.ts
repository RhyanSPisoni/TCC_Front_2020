import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AcaoComponent } from './acao/acao.component';
import { AventuraComponent } from './aventura/aventura.component';
import { AdmComponent } from './adm/adm.component';
import { AutoajudaComponent } from './autoajuda/autoajuda.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    AcaoComponent,
    AventuraComponent,
    AdmComponent,
    AutoajudaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    AcaoComponent,
    AventuraComponent,
    AdmComponent,
    AutoajudaComponent

  ]
})
export class TemplateModule { }
