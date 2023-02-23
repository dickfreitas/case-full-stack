 # Case Full-Stack - Back-End
 ![SoftMaker](../backEnd/src/img/softmaker_logo.png)

 Criação de um site de agendamento para um petshop.
 

 ## Indice
 - <a href="#proposta">Proposta</a>
 - <a href="#endpoints-pets">Endpoints Pets</a>
 - <a href="#endpoints-cliente">Endpoints Usuario</a>
 - <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a>
 - <a href="#como-rodar-esse-projeto?">Como rodar esse projeto?</a>
 - <a href="#documentação">Documentação</a>

# Desafio - Desenvolvedor Fullstack - Júnior
Seja bem-vindo! Este desafio foi projetado para avaliar a sua capacidade técnica como candidato ao cargo proposto.

## Proposta
Você deverá desenvolver um projeto utilizando React no front-end e Node.js no back-end com a finalidade de que seja possível listar, visualizar, criar, editar e excluir animais de estimação de uma petshop.

**Observações:**
> - Você pode utilizar qualquer banco de dados relacional disponível;
> - Cada animal de estimação precisa ter um identificador único, nome, idade, tipo (gato ou cachorro) e raça;
> - Além dos dados do animal, é necessário também salvar os dados pessoais, de contato e de endereço do seu respectivo dono.


## Endpoints Pets

```bash
# Handle
"https://api-astonpetshop.onrender.com/createPet"
Adiciona um novo agendamento.
```

```bash
# Edit by id
"https://api-astonpetshop.onrender.com/editPetById/:id "

Recebe um id como parametro e edita a data do procedimento marcado
```

```bash
# Handle pet
"https://api-astonpetshop.onrender.com/handlePet"
Retorna todos os agendamentos e as suas informações.
```

```bash
# Handle pet by id 
"https://api-astonpetshop.onrender.com/handlePet/:id"
Recebe o id do cliente como parametro e retorna as informaçoes do agendamento do pet em questão.

```

```bash
# Delete pet by id 
"https://api-astonpetshop.onrender.com/handlePet/:id"
Recebe o id do cliente como parametro e exclui o agendamento marcado.

```
## Endpoints Cliente

```bash
# Register
"https://api-astonpetshop.onrender.com/register"
Registra um novo usuario para fazer um agendamento.
```

```bash
# Get User
"https://api-astonpetshop.onrender.com/getUser "

Retorna todos os clientes cadastrados no banco de dados.
```

```bash
# Get user by id 
"https://api-astonpetshop.onrender.com/getUserById/:idUser"
Recebe o id do cliente como parametro e retorna as informaçoes de cadastro.
```

```bash
# Delete user by id 
"https://api-astonpetshop.onrender.com/getUser/:idUser"
Recebe o id do cliente como parametro e o exclui do banco de dados.

```

## Tecnologias Utilizadas

1. ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

2. ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
3. ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
4. ![MySql](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)


## Como rodar esse projeto?
``` bash
# Clone esse repositório
$ git clone linkrepo

# Acesse a pasta do projeto no seu computador
$ cd backend

# Instale as dependências
$ npm run dev

# A aplicação ira iniciar na porta 3003, acesse pelo navegador
$ http://localhost:3000/

```

## Documentação
<a href="https://documenter.getpostman.com/view/21068479/2s93CLtuBW">Postman</a>