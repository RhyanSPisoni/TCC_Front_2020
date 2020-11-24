import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcaoComponent } from './acao/acao.component'

const routes: Routes = [
  { path: 'categ-acao', component: AcaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
