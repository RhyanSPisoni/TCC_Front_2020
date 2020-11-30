import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { Incriveis2Component } from './incriveis2/incriveis2.component';
import { MonicaComponent } from './monica/monica.component';


const routes: Routes = [
  { path : 'comprar', component: LayoutComponent, children:[
    { path : 'monica', component: MonicaComponent},
    { path : 'incriveis2', component: Incriveis2Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
