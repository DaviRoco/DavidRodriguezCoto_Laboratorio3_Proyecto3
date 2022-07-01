import { Component, OnInit } from '@angular/core';
import {ComponentesService} from "../../servicios/componentes.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-listar-componentes',
  templateUrl: './listar-componentes.component.html',
  styleUrls: ['./listar-componentes.component.css']
})
export class ListarComponentesComponent implements OnInit {

  componentes: any;
  componenteActual: any = null;
  currentIndex = -1;
  nombre = '';

  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.obtenerComponentes();
  }
  obtenerComponentes(): void{
    this.componentesService.getAll()
      .subscribe(
        data => {
          this.componentes = data;
          console.log(data);
        },
        error =>{
          console.log(error);
        });
  }

  refrescarLista(): void {
    this.obtenerComponentes();
    this.componentes = null;
    this.currentIndex = -1;
  }

  setActivarComponente(componente: any, index: number): void{
    this.componenteActual = componente;
    this.currentIndex = index;
  }

}
