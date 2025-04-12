# Projeto de Gestão Financeira

Este é um sistema de gestão financeira para monitorar o saldo e registrar transações dos usuários, incluindo compras com dinheiro e gastos com cartão.

## Tecnologias Utilizadas
- Node.js
- Express
- PostgreSQL (com Prisma ORM)
- TypeScript

## Funcionalidades
- Cadastro de usuário
- Registro do saldo inicial
- Inserção de transações
    - Compras com dinheiro
    - Gastos com cartão
    - Registro de data das transações

## Instalação e Execução
1. Clone o repositório:
   ```sh
   git clone https://github.com/seuusuario/gestao-financeira.git
   ```
2. Instale as dependências:
   ```sh
   cd api
   ```
3. Configure o banco de dados no arquivo `.env`:
   ```sh
   DATABASE_URL=postgresql://user:password@localhost:5432/finance_db
   ```
5. Inicie o serviço docker:
   ```sh
    docker compose up --build
   ```

## Contato
Para mais informações, entre em contato pelo e-mail: `seuemail@email.com`

