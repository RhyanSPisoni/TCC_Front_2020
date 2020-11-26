import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente() : Cliente{
    let cliente : Cliente = new Cliente();
    cliente.nome ='Bruno';
    cliente.cpf ='12345678910';
    return cliente;

  }
}
