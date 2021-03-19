import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.scss'],
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private service: ClientesService) {}

  ngOnInit(): void {
    this.service.getClientes().subscribe((response) => {
      this.clientes = response;
    });
  }
}
