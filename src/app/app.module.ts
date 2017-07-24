import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

//import { RouterModule, Routes } from '@angular/router';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { VendasPrincipalComponent } from './vendas-principal/vendas-principal.component';
import { HeaderComponent } from './header/header.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    VendasPrincipalComponent,
    HeaderComponent,
    CarrinhoComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
