import { Component, OnInit } from '@angular/core';
import { Produto } from '../modelo/produto';
import { Usuario } from '../modelo/usuario';
import{ DataServiceService } from '../service/data-service.service'

@Component({
  selector: 'app-vendas-principal',
  templateUrl: './vendas-principal.component.html',
  styleUrls: ['./vendas-principal.component.css']
})

export class VendasPrincipalComponent implements OnInit {

  usuario : string;
    qtde: string;

    compras:Produto [] = [];
    logado : boolean ;

    produtosStore: Produto[]=[];

  constructor(private dataService: DataServiceService) { }


  ngOnInit() {
    this.produtosStore = this.dataService.getProdutosDb();
    this.usuario =this.dataService.getLogin();
    if(this.usuario=="")
      this.logado =false;
    else
      this.logado=true;
 
  }

  inserirCompra(produto: Produto){

    console.log(produto.descricao);
    if (!this.logado){
      alert("Faça seu login para começar suas compras!");
    }
    else{
        this.dataService.addCarrinho(this.usuario, produto);
    }
  }
}