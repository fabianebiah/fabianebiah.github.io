import { Injectable } from '@angular/core';

import { Usuario } from '../modelo/usuario';
import { Produto } from '../modelo/produto';
import { Compra } from '../modelo/compra';
import { Pedido } from '../modelo/pedido';
import {PRODUTOSDB} from './produtos-mock';

@Injectable()
export class DataServiceService {
  
  constructor() { }

  getProdutosDb(): Produto[] {
    return PRODUTOSDB;


  }

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
     let compras: Compra []=  JSON.parse(localStorage.getItem(usuario))  ;
        if(!compras){
           compras= [];
       }

       compras.push(compra);
       localStorage.setItem( usuario, JSON.stringify(compras));   
  }


  addPedido(usuario:string,carrinho: Compra[]){


    let today = new Date();
      let usercompras= usuario;
       usercompras= usercompras+ "_compras"
      let pedidos: Pedido []=  JSON.parse(localStorage.getItem(usercompras));
      if(!pedidos)
        pedidos=[];
       let pedido: Pedido = new Pedido(carrinho, today.toString());
       pedidos.push(pedido);
       localStorage.setItem(usercompras, JSON.stringify(pedidos));
       console.log(usuario);   
       localStorage.removeItem(usuario);

    }

    adicionarUsuario(usuario:Usuario){
      let list:Usuario[]=this.getListaUsuario();
      if(!list){
        list=[];
      }
       list.push(usuario);
       localStorage.setItem( "users", JSON.stringify(list));
       location.reload();

    }

    atualizarUsuario(usuariooriginal:Usuario, usuario:Usuario){

       let list:Usuario[]=this.getListaUsuario();
       let index: number =list.indexOf(usuariooriginal);
       console.log(usuariooriginal);
       console.log(usuario);
       console.log(index);
       if (index > -1) {
         //list.splice(index, 1);
         let newlist:Usuario[];
         newlist = this.remove(list, usuariooriginal);
         console.log(JSON.stringify(newlist));
         console.log(JSON.stringify(list));
          list.push(usuario);
           localStorage.setItem( "users", JSON.stringify(list));
  
      }

    }

    deletarUsuario(usuario:Usuario){

      let list:Usuario[]=this.getListaUsuario();
      if(!list){
        list=[];
      }
      let index: number =list.indexOf(usuario);
    //  let index: number =this.list.indexOf(i => i.Usuario === this.usuario.email); 
      if (index > -1) {

         list.splice(index, 1);
         let newlist:Usuario[];
         newlist = this.remove(list, usuario);
         console.log(JSON.stringify(newlist));
         console.log(JSON.stringify(list));
           localStorage.setItem( "users", JSON.stringify(list));
      }

    }

    getListaUsuario():Usuario[] {
      let list:Usuario[]=  JSON.parse(localStorage.getItem("users"));
      if (!list){
        console.log("vazio");}
      return list;
    }

     remove(array:Usuario[], element:Usuario) {
    return array.filter(e => e !== element);
    }

    logoff(){
    localStorage.removeItem("login");
    }

    getPedidos(usuario: string){
      let pedidos: Pedido [] = JSON.parse(localStorage.getItem(usuario + "_compras"));
      return pedidos;
    }

    excluiProdutoCompra(prodCompra:Compra){
      let login : string= this.getLogin();    
      let compras : Compra [] = JSON.parse(localStorage.getItem(login));
        let index: number =compras.indexOf(prodCompra);
        console.log("entrou");

         compras.splice(index, 1);
         let newlist:Compra[];
         newlist = this.removeProdCarrinho(compras, prodCompra);
        localStorage.setItem( login, JSON.stringify(newlist));
    }

   removeProdCarrinho(array:Compra[], element:Compra) {
    return array.filter(e => e !== element);
    }

  editarProdutoCompra(prodCompra:Compra, prodalterado: Compra){
      let login : string= this.getLogin();    
      let compras : Compra [] = JSON.parse(localStorage.getItem(login));
        let index: number =compras.indexOf(prodCompra);
        console.log("entrou");

         compras.splice(index, 1);
         let newlist:Compra[];
         newlist = this.removeProdCarrinho(compras, prodCompra);
         newlist.push(prodalterado);
        localStorage.setItem( login, JSON.stringify(newlist));
    }
}