import { Component, OnInit } from '@angular/core';

import { Usuario } from '../modelo/usuario';
import { Produto } from '../modelo/produto'
import { Pedido } from '../modelo/pedido'
import { Compra } from '../modelo/compra'

@Component({
  selector: 'app-acompanhar-pedido',
  templateUrl: './acompanhar-pedido.component.html',
  styleUrls: ['./acompanhar-pedido.component.css']
})
export class AcompanharPedidoComponent implements OnInit {

 
  lista: Pedido [] =[];
  usuario : string; 

  constructor() { }

  ngOnInit() {
    this.usuario =  localStorage.getItem("login"); 
    if(!this.usuario){
      alert("Você não está logado. Por Favor, faça o Login.")
    }
    else{
      this.listarCompras();
    }
  }

    listarCompras(){
  

    this.lista = JSON.parse(localStorage.getItem(this.usuario + "_compra"));
    let compras:Compra[]=this.lista[0].pedido;
    this.lista[0].pedido[0].descricao;

    console.log(this.lista[0].pedido[0].descricao);

  }

}
