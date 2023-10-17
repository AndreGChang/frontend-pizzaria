import { Endereco } from "./endereco";
import { Login } from "./login";

export class Usuario {
  id!: number;
  nome!: string;
  telefone!: string;
  cpf!: string;
  enderecos!: Endereco[];
  login!: Login;
}
