import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/app/model/item';
import { Pedido } from 'src/app/model/pedido';
import { Sabores } from 'src/app/model/sabores';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-itemsdetails',
  templateUrl: './itemsdetails.component.html',
  styleUrls: ['./itemsdetails.component.scss']
})
export class ItemsdetailsComponent{

  @Input() item: Item = new Item();
  @Output() retorno = new EventEmitter<Item>();
  @Input() modo!: boolean;

  itemService = inject(ItemService);
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  itemSelecionadoParaEdicao: Item = new Item();
  indiciSelecionadoParaEdicao!: number;


  constructor(){
    this.item.possuiSabores = false;
  }

  salvar(){
    this.itemService.verify(this.item).subscribe({
      next: item =>{
        this.retorno.emit(item);
        console.log(item);
      }
    })
  }

  abrirModal(modal : any){
    this.modalRef = this.modalService.open(modal, {size:"lg"});
  }

  deletar(sabor : Sabores, i:number) {
    this.item.sabores.splice(i,1);
  }


  retornoSaboresLista(sabor: Sabores){
    if(this.item.sabores == null){
        this.item.sabores = [];
    }

    this.item.sabores.push(sabor);
    this.modalRef.dismiss();
  }

}
