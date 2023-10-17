
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './sistema/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
import { PessoaslistaComponent } from './components/pessoas/pessoaslista/pessoaslista.component';
import { PessoasdetailsComponent } from './components/pessoas/pessoasdetails/pessoasdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { EnderecosdetailsComponent } from './components/enderecos/enderecosdetails/enderecosdetails.component';
import { PedidoslistaComponent } from './components/pedidos/pedidoslista/pedidoslista.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    IndexComponent,
    PessoaslistaComponent,
    PessoasdetailsComponent,
    EnderecosdetailsComponent,
    PedidoslistaComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
