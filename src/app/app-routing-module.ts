import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Inicio } from './view/inicio/inicio';
import { ListarMarca} from './view/listar-marca/listar-marca';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: Inicio},
  {path: 'listar-marca', component: ListarMarca}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
