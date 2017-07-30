import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { Produto } from '../modelo/produto'
import{ DataServiceService } from '../service/data-service.service'


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  lista: Produto [] =[];
  usuario : string; 

  constructor(private dataService: DataServiceService) { }

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

    inserirCompra(){
      if(this.usuario && this.usuario!=""){
        //inserrir serviço get list carrinho
        /*let today = new Date();

        
        let compra: string =this.usuario + "_compra";
        localStorage.setItem(compra, JSON.stringify(this.lista));
        localStorage.removeItem(this.usuario);*/
      //  addPedido(this.usuario, );

      this.dataService.addPedido(this.usuario,this.lista);
      }

    }
    
 }
