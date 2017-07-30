import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logado: boolean = false;
  msglogin: string = "Login";
  msgdados: string = "Criar uma conta"
  constructor() { }

  ngOnInit() {


     let userlogin : string =localStorage.getItem("login");
     
     if(!userlogin|| userlogin==""){
         this.logado = false;
      this.msglogin = "Login";
      this.msgdados="Criar uma conta"

     }
    else{
      this.logado=true;
      this.msglogin = "Logout";
      this.msgdados = "Meus Dados";
    }
    
  }

  validaLogoff(){
    console.log("logado");
    if(this.logado){
      console.log("remover");
      localStorage.removeItem("login") ;
      this.logado = false;
      window.location.href="";

      this.msglogin = "Login";
      this.msgdados="Criar uma conta"
    }

  }

}
