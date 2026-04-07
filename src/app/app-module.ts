import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListarMarca } from './view/listar-marca/listar-marca';
import { Inicio } from './view/inicio/inicio';

@NgModule({
  declarations: [App, ListarMarca, Inicio],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
