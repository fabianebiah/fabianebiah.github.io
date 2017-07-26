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
  readonly : string = "Cadastrar";
  readonlybool : boolean = false;

  constructor() { }

  ngOnInit() {
   this.list =  JSON.parse(localStorage.getItem("users"));
    if(!this.list){
           this.list= [];
       }
          else{
              let login: string = localStorage.getItem("login");

              if (login){
                  this.usuario = this.list.filter(user => {
                      if(user.email == login){
                        return user;
                      }
                  })[0];
                  this.readonly = "Alterar dados";
                  this.readonlybool=true;
         }
  }
console.log(this.readonly);
  }

  enviarDados() {

       this.list.push(this.usuario);
       localStorage.setItem( "users", JSON.stringify(this.list));
    }

}
