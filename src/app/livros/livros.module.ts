import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { Incriveis2Component } from './incriveis2/incriveis2.component';
import { MonicaComponent } from './monica/monica.component';
import { BibliavendasComponent } from './bibliavendas/bibliavendas.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { PoderComponent } from './poder/poder.component';
import { EspertoComponent } from './esperto/esperto.component';
import { ImperfeitoComponent } from './imperfeito/imperfeito.component';
import { SutilComponent } from './sutil/sutil.component';
import { AcordoComponent } from './acordo/acordo.component';
import { Matematica5Component } from './matematica5/matematica5.component';
import { TextoComponent } from './texto/texto.component';
import { ConstitucionalComponent } from './constitucional/constitucional.component';
import { PenalComponent } from './penal/penal.component';
import { ProcessualComponent } from './processual/processual.component';
import { EstrangeiraComponent } from './estrangeira/estrangeira.component';
import { EstrangeiramnComponent } from './estrangeiramn/estrangeiramn.component';
import { EstrangeiranordicosComponent } from './estrangeiranordicos/estrangeiranordicos.component';
import { OzComponent } from './oz/oz.component';
import { PeqprinComponent } from './peqprin/peqprin.component';
import { PinoquioComponent } from './pinoquio/pinoquio.component';
import { DeusComponent } from './deus/deus.component';
import { DomComponent } from './dom/dom.component';
import { OlhosComponent } from './olhos/olhos.component';
import { Dbs2Component } from './dbs2/dbs2.component';
import { KakuriyoComponent } from './kakuriyo/kakuriyo.component';
import { HorroresComponent } from './horrores/horrores.component';
import { InternaComponent } from './interna/interna.component';
import { VibraComponent } from './vibra/vibra.component';


@NgModule({
  declarations: [Incriveis2Component, MonicaComponent, BibliavendasComponent, DisciplinaComponent, PoderComponent, EspertoComponent, ImperfeitoComponent, SutilComponent, AcordoComponent, Matematica5Component, TextoComponent, ConstitucionalComponent, PenalComponent, ProcessualComponent, EstrangeiraComponent, EstrangeiramnComponent, EstrangeiranordicosComponent, OzComponent, PeqprinComponent, PinoquioComponent, DeusComponent, DomComponent, OlhosComponent, Dbs2Component, KakuriyoComponent, HorroresComponent, InternaComponent, VibraComponent],
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
