import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { Produto } from '../modelo/produto';
import { Compra } from '../modelo/compra';
import{ DataServiceService } from '../service/data-service.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  lista: Produto [] =[];
  usuario : string; 
  logado:boolean;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.usuario =  this.dataService.getLogin(); 
    if(!this.usuario){
      this.logado=false;
      alert("Você não está logado. Por Favor, faça o Login.")
    }
    else{
      this.listarCompras();
      this.logado=true;
    }
  }

    listarCompras(){

    this.lista = JSON.parse(localStorage.getItem(this.usuario));

  }

    inserirCompra(){
      if(this.usuario && this.usuario!=""){
      this.dataService.addPedido(this.usuario,this.lista);
      }

    }

    excluirProduto(compra: Compra){
      this.dataService.excluiProdutoCompra(compra);
    }
    
 }
