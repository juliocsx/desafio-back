# Desafio-back

Uma API para um app no estilo to-do list, com possibilidade de criação de tasks e tags que podem ser associadas entre si, e login de usuário e autenticação

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Primeiro, obtenha uma cópia do projeto através do comando **git clone**. Depois disso, copie e cole o URL do projeto e clique enter.

```
$ git clone https://github.com/juliocsx/desafio-back.git
```

Após obter uma cópia do projeto, é necessário instalar as dependências necessárias para o funcionamento do projeto. Isso pode ser obtido através do comando abaixo

```
npm i
```

Agora abra o terminal de sua escolha no diretório onde o API foi baixado. No exemplo abaixo, os arquivos se encontram dentro da pasta documents/github. 

```
cd documents/github/desafio-back
```

## ⚙️ Rodando o API

Com os passos anteriores concluídos, é hora de executar o app. Essa etapa envolve criar o arquivo .env com as variáveis sensíveis que são utilizadas para acesso ao banco e chave para decodificação e autenticação utilizando web token. Você precisa das informações contidas no arquivo **.env.example**.

```
PORT=
JWT_KEY=
DB_URL=
DB_NAME=
```

Utilize o .env fornecido por mim, que já contém alguns registros no banco, prontos para teste e uso, ou crie o seu próprio .env!

Com os passos anteriores concluídos, é hora de executar o app. Após selecionar a pasta correta, agora basta usar o comando para inicializar a API e sua conexão com o banco.

```
npm run dev
```

## 📦 Consumindo o API

Na tabela abaixo você pode encontrar todas as rotas fornecidas pelo API. A rota padrão é `http://localhost:3000` + qualquer URL da tabela abaixo. Nenhuma das rotas vai funcionar se você não criar uma conta primeiro e fizer o login obtendo o token para autenticar as rotas. Portanto, crie o usuário, faça login e obtenha um token para utilizá-las. Ao obter um token na rota `/api/login`, use a configuração de ambiente do insomnia para colocar o token em todos cabeçalhos para evitar repetição. Além disso forneça o `user_id` (obtido na resposta do login) também na configuração de ambiente, para buscar apenas as informações do usuário logado.


Criação de Usuário e login

| Método | URL | Descrição |
| :--- | :--- | :--- |
| POST | `/api/create-user` | Criação de Usuário |
| POST | `/api/login` | Login do usuário, gerando um token como resposta |

CRUD de Tasks

| Método | URL | Descrição |
| :--- | :--- | :--- |
| POST | `/api/create-task` | Criação de Task |
| GET | `/api/get-all-tasks` | Procura todas as Task do usuário |
| GET | `/api/get-task-by-title` | Faz uma busca por título da task, de todas as tasks do usuário |
| GET | `/api/get-tasks-by-tag` | Filtra as tasks por uma tag selecionada | 
| PUT | `/api/edit-task` | Edita uma task do usuário |
| DELETE | `/api/delete-task` | Deleta uma task selecionada do usuário |

Crud de Tags

| Método | URL | Descrição |
| :--- | :--- | :--- |
| POST | `/api/create-tag` | Criação de Tag |
| GET | `/api/get-all-tags` | Procura todas as Tags do usuário |
| PUT | `/api/edit-tag` | Edita uma tag do usuário |
| DELETE | `/api/delete-tag` | Deleta uma task selecionada do usuário |

Crud de Relacionamentos

| Método | URL | Descrição |
| :--- | :--- | :--- |
| POST | `/api/create-relationship-task-tag` | Cria um relacionamento entre tasks/tags do usuário |
| GET | `/api/get-all-relationships-task-tag` | Busca todos os relacionamentos entre tasks/tags do usuário |
| DELETE | `/api/delete-relationship-task-tag` | Deleta um relacionamento entre tasks/tags do usuário |

## 🛠️ Construído com

Algumas das tecnologias utilizadas para criar esse projeto

* [Typescript](https://www.typescriptlang.org/) - Javscript com sintaxe para tipagem
* [Express](https://expressjs.com/pt-br/) - Framework web para Node.js
* [Sequelize](https://sequelize.org/) - ORM em Typescript para Postgres, MongoDB, etc... 
* [JSON Web Tokens](https://jwt.io/) - Método de autenticação com Web Tokens
* [dotenv](https://www.npmjs.com/package/dotenv) - Módulo para configuração de variáveis de ambiente

---

⌨️ with ❤️ by Julio Cesar 😊
