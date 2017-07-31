import { Component, OnInit } from '@angular/core';

import { Usuario } from '../modelo/usuario';
import{ DataServiceService } from '../service/data-service.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario('', '', '');
  list : Usuario [];
  readonly : string = "Cadastrar";
  readonlybool : boolean = false;
  login:string;
   usuariooriginal: Usuario = new Usuario('', '', '');

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
   this.list =  JSON.parse(localStorage.getItem("users"));
    if(!this.list){
           this.list= [];
       }
          else{
              this.login = localStorage.getItem("login");
            

              if (this.login){
                  this.usuario = this.list.filter(user => {
                      if(user.email == this.login){
                        return user;
                      }
                  })[0];
                  this.readonly = "Alterar dados";
                  this.readonlybool=true;
                  this.usuariooriginal.nome=this.usuario.nome;
                  this.usuariooriginal.email=this.usuario.email;
                  this.usuariooriginal.senha=this.usuario.senha;
         }
              
  }
  }

  enviarDados() {

    if (!this.login){

       this.dataService.adicionarUsuario(this.usuario);


    }
    else{

           this.dataService.atualizarUsuario(this.usuariooriginal, this.usuario);
           window.location.href="cadastro";

      }

    }

  remove(array:Usuario[], element:Usuario) {
    return array.filter(e => e !== element);
}

apagarUsuario(){

      this.dataService.deletarUsuario(this.usuariooriginal);
      //window.location.href="cadastro";
  }

}
