import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario = new Usuario('', '', '');
  list : Usuario [];

  constructor() { }

  ngOnInit() {
   this.list =  JSON.parse(localStorage.getItem("users"));
    if(!this.list){
           this.list= [];
       }

  }

  enviarDados() {

       this.list.push(this.usuario);
       localStorage.setItem( "users", JSON.stringify(this.list));
    }

}
