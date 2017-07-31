import { Component, OnInit } from '@angular/core';

import { Usuario } from '../modelo/usuario';
import { Produto } from '../modelo/produto'
import { Pedido } from '../modelo/pedido'
import { Compra } from '../modelo/compra'
import { DataServiceService } from '../service/data-service.service'

@Component({
  selector: 'app-acompanhar-pedido',
  templateUrl: './acompanhar-pedido.component.html',
  styleUrls: ['./acompanhar-pedido.component.css']
})
export class AcompanharPedidoComponent implements OnInit {

 
  lista: Pedido [] =[];
  usuario : string; 
  logado:boolean;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.usuario =  this.dataService.getLogin(); 
    if(!this.usuario||this.usuario==''){
      this.logado=false;
    }
    else{
      this.logado=true;
      this.listarCompras();
    }
  }

    listarCompras(){
  

    this.lista = JSON.parse(localStorage.getItem(this.usuario + "_compras"));
     
    console.log(this.lista[0].data);

  }

}
