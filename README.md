# README do Projeto L2 API

## Descrição

Este projeto é uma API desenvolvida em TypeScript. Ele utiliza Docker e Docker Compose para facilitar o desenvolvimento e a execução da aplicação.

## Pré-requisitos

- Docker
- Docker Compose

## Como Rodar a Aplicação

1. Clone o repositório:

   git clone [<URL_DO_REPOSITORIO>](https://github.com/lezisilva163/l2-api.git)

2. Navegue até o diretório do projeto:

   cd l2-api

3. Construa e inicie os containers utilizando o Docker Compose:

   docker-compose up --build

4. A aplicação estará disponível em `http://localhost:3333` (ou na porta configurada no seu `docker-compose.yml`).
