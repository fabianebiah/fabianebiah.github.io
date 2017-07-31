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
  login:string;
   usuariooriginal = new Usuario('', '', '');

  constructor() { }

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
                  this.usuariooriginal=this.usuario;
         }
              
  }
  }

  enviarDados() {

    if (!this.login){

       this.list.push(this.usuario);
       localStorage.setItem( "users", JSON.stringify(this.list));
       console.log("push");
       location.reload();


    }
    else{
      let index: number =this.list.indexOf(this.usuariooriginal);
      if (index > -1) {

         this.list.splice(index, 1);
         let newlist:Usuario[];
         newlist = this.remove(this.list, this.usuariooriginal);
          this.list.push(this.usuario);
           localStorage.setItem( "users", JSON.stringify(this.list));
           window.location.href="cadastro";

      }
      else{

      }
    }

  }

  remove(array:Usuario[], element:Usuario) {
    return array.filter(e => e !== element);
}

apagarUsuario(){
  let index: number =this.list.indexOf(this.usuariooriginal);
      if (index > -1) {

         this.list.splice(index, 1);
         let newlist:Usuario[];
         newlist = this.remove(this.list, this.usuariooriginal);
           localStorage.setItem( "users", JSON.stringify(this.list));
           localStorage.removeItem(this.login);
           localStorage.removeItem("login");
           window.location.href="cadastro";
      }

  }

}
