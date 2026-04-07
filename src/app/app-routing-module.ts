import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Inicio } from './view/inicio/inicio';
import { ListarMarca} from './view/listar-marca/listar-marca';
import { InserirMarca } from './view/inserir-marca/inserir-marca';



const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: Inicio},
  {path: 'listar-marca', component: ListarMarca},
  {path: 'inserir-marca', component: InserirMarca}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
