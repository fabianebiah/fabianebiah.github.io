import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { Produto } from '../modelo/produto'

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  lista: Produto [] =[];
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

    this.lista = JSON.parse(localStorage.getItem(this.usuario));
    //console.log(this.lista);

  }
}
