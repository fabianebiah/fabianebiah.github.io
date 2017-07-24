import {Routes} from '@angular/router'

import { VendasPrincipalComponent } from './vendas-principal/vendas-principal.component';
import { HeaderComponent } from './header/header.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';


export const ROUTES: Routes = [
 
  {path: 'login', component: LoginComponent},
  {path: '', component: VendasPrincipalComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'cadastro', component: CadastroComponent},

  {path: '**', component: VendasPrincipalComponent}
]


