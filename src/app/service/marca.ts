import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Marca } from '../model/marca';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private url = "http://localhost:8080/cmarca/marca";

  constructor(private http: HttpClient) { }

    //Consumir o serviço de marca para LISTAR as marcas
    listarMarcas(): Observable<Marca[]> {
      return this.http.get<Marca[]>(`${this.url}`);
    }

    //Consumir o serviço de marca para CONSULTAR uma marca especifica
    consultarMarca(codigo :Number): Observable<Marca> {
      return this.http.get<Marca>(`${this.url}/${codigo}`);
    }

    //Consumir o serviço de marca para INCLUIR uma nova marca
    incluirMarca(marca :Marca): Observable<Object> {
      return this.http.post(`${this.url}`, marca);
    }

    //Consumir o serviço de marca para ALTERAR uma marca existente
    alterarMarca(codigo: Number, marca :Marca): Observable<Object> {
      return this.http.put(`${this.url}/${codigo}`, marca);
    }

    //Consumir o serviço de marca para EXCLUIR uma marca existente
    excluirMarca(codigo: Number): Observable<Object> {
      return this.http.delete(`${this.url}/${codigo}`);
    }
}
