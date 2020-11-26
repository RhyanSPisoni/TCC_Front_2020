import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcaoComponent } from './acao/acao.component';
import { AventuraComponent } from './aventura/aventura.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { AutoajudaComponent } from './autoajuda/autoajuda.component';
import { DidaticoComponent } from './didatico/didatico.component';
import { DireitoComponent } from './direito/direito.component';
import { LEstrangeiraComponent } from './l-estrangeira/l-estrangeira.component';
import { LIJuvenilComponent } from './l-i-juvenil/l-i-juvenil.component';
import { MangaComponent } from './manga/manga.component';
import { MedicinaComponent } from './medicina/medicina.component';
import { NacionalComponent } from './nacional/nacional.component';

const routes: Routes = [
  { path : 'categ-acao', component: AcaoComponent},
  { path : 'categ-aven', component: AventuraComponent},
  { path : 'categ-adm', component: AdministracaoComponent },
  { path : 'categ-autoajuda', component: AutoajudaComponent },
  { path : 'categ-dida', component: DidaticoComponent },
  { path : 'categ-dir', component: DireitoComponent},
  { path : 'categ-hqmanga', component: MangaComponent},
  { path : 'categ-lit_est', component: LEstrangeiraComponent },
  { path : 'categ-lit_inf', component: LIJuvenilComponent },
  { path : 'categ-lit_nac', component: NacionalComponent},
  { path : 'categ-med', component: MedicinaComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
