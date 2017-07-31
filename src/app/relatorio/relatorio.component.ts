import { Component, OnInit } from '@angular/core';

import { Usuario } from '../modelo/usuario';
import { Produto } from '../modelo/produto'
import { Pedido } from '../modelo/pedido'
import { Compra } from '../modelo/compra'
import{ DataServiceService } from '../service/data-service.service'

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

 
  lista: Pedido [] =[];
  usuario : string; 
  logado:boolean;
  total: number;
  media: number;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.usuario= this.dataService.getLogin();
     this.lista = this.dataService.getPedidos(this.usuario);
    this.total=this.totalCompras();
    this.media = this.mediaProdutos();

  }

  totalCompras():number{
    return this.lista.length;
  }

  mediaProdutos():number{
   let media:number = 0;;
  this.lista.forEach(element => {
    media +=element.pedido.length;    
  });
    media = media/this.lista.length;
    return media; 
  }
  
}
