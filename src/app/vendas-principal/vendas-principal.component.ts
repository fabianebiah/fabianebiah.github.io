import { Component, OnInit } from '@angular/core';
import { Produto } from '../modelo/produto';
import { Usuario } from '../modelo/usuario'

@Component({
  selector: 'app-vendas-principal',
  templateUrl: './vendas-principal.component.html',
  styleUrls: ['./vendas-principal.component.css']
})

export class VendasPrincipalComponent implements OnInit {

    cama = new Produto('Cama Dog Premium pequena - PetMania', '80,00', '1');
    coleira = new Produto('Coleira BatDog - Mundo Pet', '30,00', '1');
    toca = new Produto('Toca com almofada - Stylo Cat', '100,00', '1234');
    arranhador = new Produto('Arranhador Gato Feliz - PetLife', '70,00', '1234');
    usuario : string;

//compras:Produto [] = [];
compras:Produto [] = [];
  constructor() { }


  ngOnInit() {
    this.usuario =  localStorage.getItem("login");
     if(!this.compras){
        this.compras= [];
     }    
  }

  inserirCompra(idBt: number){

    if (!this.usuario){
      alert("Faça seu login para começar suas compras!");
    }
    else{

    switch(idBt) { 
   case 1: { 
        this.compras =  JSON.parse(localStorage.getItem(this.usuario))  ;
        if(!this.compras){
           this.compras= [];
       }
       this.compras.push(this.cama);
       localStorage.setItem( this.usuario, JSON.stringify(this.compras));     
      break; 
   } 
   case 2: {
      this.compras =  JSON.parse(localStorage.getItem(this.usuario))  ; 
       if(!this.compras){
           this.compras= [];
       }
       this.compras.push(this.coleira);
       localStorage.setItem( this.usuario, JSON.stringify(this.compras));
      break; 
   } 
   case 3: { 
     this.compras =  JSON.parse(localStorage.getItem(this.usuario))  ;
      if(!this.compras){
           this.compras= [];
       }
       this.compras.push(this.toca);
       localStorage.setItem( this.usuario, JSON.stringify(this.compras));
      break; 
   } 
   case 4: { 
     this.compras =  JSON.parse(localStorage.getItem(this.usuario))  ;
    if(!this.compras){
           this.compras= [];
       }
       this.compras.push(this.arranhador);
       localStorage.setItem( this.usuario, JSON.stringify(this.compras));
      break; 
   } 
   default: { 
      //statements; 
      break; 
      
    }

  }
    }

}
}