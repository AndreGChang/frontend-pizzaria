import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrarConta } from 'src/app/model/cadastrar-conta';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  conta : CadastrarConta = new CadastrarConta();

  usuarioService = inject(UsuarioService);
  rota = inject(Router);

  constructor(){
    this.conta.role = '';
    this.conta.password = '';
    this.conta.username = '';
  }

  cadastrar(){
    this.usuarioService.cadastrar(this.conta).subscribe({
      next:response =>{
        console.log(this.conta);
        this.rota.navigate(['/login']);
      },
      error: error =>{
        console.error(error);
        alert(error);
      }
    })
  }
}
