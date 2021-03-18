import { Injectable } from '@angular/core';

import { Cliente } from '../clientes/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor() {}

  getCliente(): Cliente {
    const cliente: Cliente = new Cliente();
    cliente.nome = 'Fellipe';
    cliente.cpf = '595.141.410-59';
    return cliente;
  }
}
