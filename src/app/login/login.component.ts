import { Component, OnInit } from '@angular/core';

import { Usuario } from '../modelo/usuario';
import{ DataServiceService } from '../service/data-service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = new Usuario("", "", "");
 userlist : Usuario [] ;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
   let teste:boolean = this.dataService.usuarioLogado();  
  }
   entrar() {   
    if(this.dataService.validaLogin(this.user)){
       window.location.href="";
    }
      else{
        //colocar uma msg de erro
        alert("erro");
      }

  }

}

