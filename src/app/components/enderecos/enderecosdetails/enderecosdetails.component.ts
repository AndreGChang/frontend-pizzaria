import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-enderecosdetails',
  templateUrl: './enderecosdetails.component.html',
  styleUrls: ['./enderecosdetails.component.scss']
})
export class EnderecosdetailsComponent {

  @Input() endereco: Endereco = new Endereco();
  @Output() retorno = new EventEmitter<Endereco>();

  enderecoService = inject(EnderecoService);


  salvar(){

    this.retorno.emit(this.endereco);

    // this.enderecoService.verify(this.endereco).subscribe({
    //   next: endereco =>{
    //     this.retorno.emit(endereco);
    //   },
    //   error: erro =>{
    //     alert("Errro, olhar no console");
    //     console.log(erro);
    //   }
    // });

  }

}
