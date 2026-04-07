import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Marca } from '../../model/marca';  
import { MarcaService } from '../../service/marca';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-inserir-marca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inserir-marca.html',
  styleUrl: './inserir-marca.css',
})
export class InserirMarca implements OnInit{

  marca: Marca = new Marca();

  constructor(private marcaService: MarcaService, private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.inserirMarca();
  }

  inserirMarca() {
    //Executará o metodo incluirMarca() do service e redirecionará para a tela de listar-marca
    this.marcaService.incluirMarca(this.marca).subscribe(data => {
      console.log("Marca inserida com sucesso:", data);
      this.listarMarca();
    });


  }

  listarMarca(){
      this.router.navigate(['/listar-marca']);
  }


}
