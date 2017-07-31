import { Component, OnInit } from '@angular/core';
import{ DataServiceService } from '../service/data-service.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logado: boolean = false;
  msglogin: string = "Login";
  msgdados: string = "Criar uma conta"

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {


     let userlogin : string =this.dataService.getLogin();
     
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
      this.dataService.logoff();
      this.logado = false;
      window.location.href="";

      this.msglogin = "Login";
      this.msgdados="Criar uma conta"
    }

  }

}
