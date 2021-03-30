import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cliente } from '../clientes/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      'https://fc-clientes.herokuapp.com/sistema-clientes/api/clientes',
      cliente
    );
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(
      'https://fc-clientes.herokuapp.com/sistema-clientes/api/clientes'
    );
  }

  getCliente(): Cliente {
    const cliente: Cliente = new Cliente();
    cliente.nome = 'Fellipe';
    cliente.cpf = '59514141059';
    return cliente;
  }
}
