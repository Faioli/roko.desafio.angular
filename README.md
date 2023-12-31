﻿# Angular CEP Search

Este é um projeto Angular simples que permite realizar uma busca de endereços a partir de CEPs informados pelo usuário. A aplicação utiliza um formulário baseado em template-driven form para capturar os CEPs, e realiza requisições à API do ViaCEP para obter os dados dos endereços.

## Funcionalidades

- Digitar um ou mais CEPs separados por ponto e vírgula no campo de busca.
- Realizar a busca dos endereços para todos os CEPs informados.
- Exibir os resultados de forma amigável e responsiva, utilizando Bootstrap para estilização.
- Mostrar alertas para erros de validação no formulário ou erros de retorno da API.

## Instalação

1. Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.
2. Faça o clone ou download deste repositório.
3. No terminal, navegue até o diretório do projeto e instale as dependências usando o seguinte comando:

```bash
cd frontend
npm install
```

## Como Executar 

1. No terminal, no diretório do projeto, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm start
```

2. Abra seu navegador e visite http://localhost:4200/ para visualizar a aplicação.

## Uso

1. Na barra de busca, digite um ou mais CEPs separados por ponto e vírgula (por exemplo:"12345-678; 87654-321").
2. Clique no botão "Buscar" para realizar a busca dos endereços.
3. Os resultados serão exibidos abaixo do formulário, em uma lista amigável e responsiva.

## Dependências 

- Angular 12.x
- Bootstrap 4.x

## Estrutura do Projeto

- src/app/app.component: Componente principal que contém o formulário de busca de CEPs.
- src/app/services/cep.service.ts: Serviço responsável por realizar as requisições à API do ViaCEP.
- src/app/models/cep.ts: Classe utilizada para representar os dados do endereço retornado pela API.
- src/styles.css: Arquivo CSS com ajustes específicos de estilo.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum bug, tiver sugestões de melhorias ou novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request.
