import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private toastSvc: ToastrService){

  }
  salvar(){
    this.retorno.emit(this.endereco);
    this.toastSvc.success(`Endereço salvo`,"PizzariaTOP",{
      closeButton:true,
      progressBar: true,
      tapToDismiss:true
    });

  }

}
