import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = new Usuario("", "", "");
 userlist : Usuario [] ;
 altflag: boolean = false;

  constructor() { }

  ngOnInit() {
     this.userlist = JSON.parse(localStorage.getItem("users"));
     let userlogin : string = JSON.parse(localStorage.getItem("login"));
     if (userlogin){
       this.user = this.userlist.filter(usuario => {
          if(usuario.email == userlogin){
            console.log("busca")
            return usuario;
          }
      })[0];
       this.altflag = true;
     }
  }
   entrar() {   
    if(this.userlist){
      let usr: Usuario;
      usr = this.userlist.filter(usuario => {
          if(usuario.email == this.user.email  && usuario.senha == this.user.senha){
            return usuario
          }
      })[0];
        if (usr){
           localStorage.setItem("login", this.user.email)
          window.location.href="";
        }
        else {
          alert("Usuário ou senha inválidos")
        }
    }
  }
}

