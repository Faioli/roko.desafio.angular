import { Component } from '@angular/core';
import { CepService } from './services/cep.service';
import { Cep } from './models/cep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cepInput: string = '';
  enderecos: Cep[] = [];

  constructor(private cepService: CepService) {}

  buscarEnderecos() {
    const ceps = this.cepInput.split(';').map(cep => cep.trim());
    const observables = ceps.map(cep => this.cepService.getEndereco(cep));
    this.enderecos = [];
    observables.forEach(observable => {
      observable.subscribe(
        (cep: Cep) => this.enderecos.push(cep),
        error => alert('Erro ao buscar endereço para o CEP: ' + error)
      );
    });
  }
}
