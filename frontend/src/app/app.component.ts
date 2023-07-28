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
  errorMessage: string = '';

  constructor(private cepService: CepService) {}

  buscarEnderecos() {
    this.errorMessage = ''; // Limpa a mensagem de erro a cada nova busca
    const ceps = this.cepInput.split(';').map(cep => cep.trim());
    const observables = ceps.map(cep => this.cepService.getEndereco(cep));
    this.enderecos = [];
    observables.forEach(observable => {
      observable.subscribe(
        (cep: Cep) => this.enderecos.push(cep),
        error => (this.errorMessage = 'Erro ao buscar endereço para o CEP, verifique os dados informados')
      );
    });
  }
}
