import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/model/pedido';
import { Usuario } from 'src/app/model/usuario';
import { PedidoService } from 'src/app/services/pedido.service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-pedidosdetails',
  templateUrl: './pedidosdetails.component.html',
  styleUrls: ['./pedidosdetails.component.scss']
})
export class PedidosdetailsComponent {


  @Input() pedido: Pedido =  new Pedido();
  @Output() retorno = new EventEmitter<Pedido>();


  pedidoService = inject(PedidoService);
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef

  pedidoSelecionadoParaEdicao: Pedido = new Pedido();
  indiceSelecionadoParaEdicao!: number;;

  constructor(){

  }

  salvar() {
    this.pedidoService.verify(this.pedido).subscribe({
      next: usuario => {
        this.retorno.emit(usuario);
      },
      error: erro => {
        alert("Errro, olhar no console");
        console.log(erro);
      }
    });
  }

  adicionarEndereco(modal: any) {
    // this.pedidoSelecionadoParaEdicao = new Pedido();
    // this.indiceSelecionadoParaEdicao = -1;
   this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

  editarEndereco(modal: any, pedido: Pedido, indice: number) {
    this.pedidoSelecionadoParaEdicao = Object.assign({}, pedido);
    this.indiceSelecionadoParaEdicao = indice;
    this.modalRef = this.modalService.open(modal, { size: "lg" });
  }

  deletar(item: Item, i:number) {
    this.pedido.item.splice(i,1);
  }


  retornoUsuarioSelecionado(usuario : Usuario){
    this.pedido.usuario = usuario;
  }

  retornoItemLista(item : Item){
    if(this.pedido.item == null){
        this.pedido.item = [];
    }

    this.pedido.item.push(item);
    this.modalRef.dismiss();
  }

  lancarUsuario(modal: any){
    this.modalRef = this.modalService.open(modal, {size: "lg"});
  }

  receberUsuario(usuario : Usuario){
    this.pedido.usuario = usuario;
    this.modalRef.dismiss();
  }


  lancar(modal: any){
    this.modalRef = this.modalService.open(modal, {size: "lg"});
  }

}
