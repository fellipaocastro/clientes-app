import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      'http://localhost:8081/sistema-clientes/api/clientes',
      cliente
    );
  }

  getCliente(): Cliente {
    const cliente: Cliente = new Cliente();
    cliente.nome = 'Fellipe';
    cliente.cpf = '59514141059';
    return cliente;
  }
}
