import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AcaoComponent } from './acao/acao.component';
import { AventuraComponent } from './aventura/aventura.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { AutoajudaComponent } from './autoajuda/autoajuda.component';
import { DidaticoComponent } from './didatico/didatico.component';
import { DireitoComponent } from './direito/direito.component';
import { MangaComponent } from './manga/manga.component';
import { LEstrangeiraComponent } from './l-estrangeira/l-estrangeira.component';
import { LIJuvenilComponent } from './l-i-juvenil/l-i-juvenil.component';
import { NacionalComponent } from './nacional/nacional.component';
import { MedicinaComponent } from './medicina/medicina.component';
import { BuscaComponent } from './busca/busca.component';


@NgModule({
  declarations: [AcaoComponent, 
    AventuraComponent, 
    AdministracaoComponent, 
    AutoajudaComponent, 
    DidaticoComponent, 
    DireitoComponent, 
    MangaComponent, 
    LEstrangeiraComponent, 
    LIJuvenilComponent, 
    NacionalComponent, 
    MedicinaComponent, BuscaComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  exports:[
    AcaoComponent,
    AventuraComponent,
    AdministracaoComponent, 
    AutoajudaComponent, 
    DidaticoComponent,
    DireitoComponent, 
    MangaComponent, 
    LEstrangeiraComponent, 
    LIJuvenilComponent, 
    NacionalComponent, 
    MedicinaComponent,
    BuscaComponent
  ]
})
export class CategoryModule { }
