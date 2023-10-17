import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

login : Login = new Login();
roteador = inject(Router);


logar(){
  if(this.login.senha == "admin" && this.login.email == "admin"){
    this.roteador.navigate(['admin/pessoas']);
  }else{
    alert('Login ou senha incorretos!');
  }
}

}
