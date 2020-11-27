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
import { LayoutComponent } from '../layout/layout.component';
import { BuscaComponent } from './busca/busca.component';

const routes: Routes = [
  {path : 'categ', component: LayoutComponent, children:[
    
    { path : 'acao', component: AcaoComponent},
    { path : 'aven', component: AventuraComponent},
    { path : 'adm', component: AdministracaoComponent },
    { path : 'autoajuda', component: AutoajudaComponent },
    { path : 'dida', component: DidaticoComponent },
    { path : 'dir', component: DireitoComponent},
    { path : 'hqmanga', component: MangaComponent},
    { path : 'lit_est', component: LEstrangeiraComponent },
    { path : 'lit_inf', component: LIJuvenilComponent },
    { path : 'lit_nac', component: NacionalComponent},
    { path : 'med', component: MedicinaComponent},
    { path : 'busca', component: BuscaComponent},
    { path: '', redirectTo : 'categ/busca', pathMatch: 'full'}
    
  ]}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
