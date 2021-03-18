import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';

import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss'],
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente;
  success = false;
  errors: string[];

  constructor(private service: ClientesService) {
    this.cliente = service.getCliente();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.salvar(this.cliente).subscribe(
      (response) => {
        this.cliente = response;
        this.success = true;
        this.errors = [];
      },
      (errorResponse) => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
    );
  }
}
