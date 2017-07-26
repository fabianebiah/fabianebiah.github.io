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

    console.log(this.logado);

     let userlogin : string =localStorage.getItem("login");
     console.log(userlogin);
     
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
    if(this.logado){
      localStorage.removeItem("login") ;
      this.logado = false;
      window.location.href="";

      //this.msglogin = "Login";
      //this.msgdados="Criar uma conta"
    }

  }

}
