# Mercafácil

## Descrição do Projeto

O projeto consiste em três aplicações: a primeira (api) é uma API em GraphQL, a segunda(macapa) e terceira(verejao) são
aplicações que consomem os dados da api e guardam em seu banco de dados.

## Api

Para utilização da API, é necessário ter o docker e docker-compose instalados na máquina.

As chamadas em GraphQL são feitas para o endpoint: http://localhost:3000/graphql

Para registrar um usuário:

```graphql
mutation signup($input: LoginUserInput!) {
  signup(loginUserInput: $input) {
    id
  }
}

query variables:

{
  "input":{
    "username": ...,
    "password": ...
  }
}
```

para logar com um usuário:

```graphql
mutation login($input: LoginUserInput!) {
  login(loginUserInput: $input) {
    user {
      username
    }
    access_token
  }
}

query variables:

{
  "input":{
    "username": ...,
    "password": ...
  }
}
```

