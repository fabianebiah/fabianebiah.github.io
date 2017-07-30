import { Injectable } from '@angular/core';

import { Usuario } from '../modelo/usuario';
import { Produto } from '../modelo/produto';
import { Compra } from '../modelo/compra';
import { Pedido } from '../modelo/pedido';

@Injectable()
export class DataServiceService {
  
  constructor() { }

  validaLogin(user: Usuario):boolean{
     let userlist: Usuario []= JSON.parse(localStorage.getItem("users"));
     let userlogin : string =localStorage.getItem("login");
      if(userlist){
            let usr: Usuario;
            usr = userlist.filter(usuario => {
                if(usuario.email == user.email  && usuario.senha == user.senha){
                  return usuario
                }
            })[0];
              if (usr){
                localStorage.setItem("login", user.email);
                return true;
              }
              else {
                return false;
              }
          }
            else{
              return false;
            }
  }

  usuarioLogado():boolean{
    let userlist:Usuario [] = JSON.parse(localStorage.getItem("users"));
     let userlogin : string =localStorage.getItem("login");
    if (userlogin && userlogin !=""){
      return true;

    }
    else{
      return false;
    }
     
  }

    getLogin():string{
     let userlogin : string =localStorage.getItem("login");
    if (userlogin && userlogin !=""){
      return userlogin;

    }
    else{
      return "";
    }
     
  }

  addCarrinho(usuario:string,produto: Produto){
    let compra: Compra = new Compra(produto.descricao,produto.preco, produto.quantidade);
     let compras: Produto []=  JSON.parse(localStorage.getItem(usuario))  ;
        if(!compras){
           compras= [];
       }

       compras.push(compra);
       localStorage.setItem( usuario, JSON.stringify(compras));   
  }


  addPedido(usuario:string,carrinho: Compra[]){
    console.log(usuario); 
    let today = new Date();
      let usercompras= usuario;
       usercompras= usercompras+ "_compras"
       let pedidos: Pedido []= [];
       let pedido: Pedido = new Pedido(carrinho, today);
       pedidos.push(pedido);
       localStorage.setItem(usercompras, JSON.stringify(pedidos));
       console.log(usuario);   
       localStorage.removeItem(usuario);

    }

}


