import { Item } from "./item";
import { Usuario } from "./usuario";

export class Pedido {
  id!: number;
  nome!: string;
  observacao!: string;
  item!: Item[];
  usuario!: Usuario;
}
