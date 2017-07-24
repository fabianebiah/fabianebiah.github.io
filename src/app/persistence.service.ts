import { Injectable } from '@angular/core';

import{ Usuario } from './modelo/usuario'

@Injectable()
export class PersistenceService {
  usuario: Usuario;
  constructor() { }

  validaLogin(user: Usuario){
    this.usuario = user;

    let userlist: Usuario[];
    userlist = JSON.parse(localStorage.getItem("users"));
    if(userlist){
      if(userlist.find(this.validarUsuario)){
    window.location.href="";
  }
  
}

 
  }

validarUsuario(usuario1: Usuario) {
    return (usuario1.email == this.usuario.email && usuario1.senha == this.usuario.senha);
}

}
