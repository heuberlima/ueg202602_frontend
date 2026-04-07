import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from '../../model/marca';
import { MarcaService } from '../../service/marca';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-listar-marca',
  standalone: false,
  templateUrl: './listar-marca.html',
  styleUrl: './listar-marca.css',
})
export class ListarMarca  implements OnInit{

 marcas!: Marca[];
  
  constructor(private marcaService: MarcaService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log("Inicializando o componente ListarMarca");
      this.listarMarcas();
  }

  listarMarcas() {
    console.log("Listar Marcas");
    //Executará o metodo listarMarcas() do service e atribuirá o resultado à variável marcas
    this.marcaService.listarMarcas().subscribe(data =>{
      console.log("Dados recebidos:", data);
      this.marcas = data;
      this.cdr.detectChanges(); // força atualização da tela
      
    });
  }
  
}
