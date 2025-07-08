# API dos Protetores dos animais contra o especismo (PACES)

Essa API foi criada para fornecer dados para um front end que combate o Especismo (maus tratos contra animais).

## Configuração

1. **git clone https://github.com/rogersoubr/PACES.git** 

### Frameworks
 * express
 * nodemon
 * prisma
 * cors
 * dotenv

#### Instalar com: 
* **npm i** 

### Rodando
* **npm run devN**

* Caso tenha feito alguma mudança no prisma:
1. **npm run prisma:generate**
2. **npm run prisma:migrate**
3. **npm run prisma:push**

* Caso não tenha nenhum dado no Banco de Dados:
4. **npm run seed**

## ⏺ Endpoints

### Porta
* 3001

### 1- Colocar controle de uma populacao

* **Endpoint:** http://localhost:3001/populacoes/cadastra

* **Método:** POST

* **Formato de dados:** JSON

* Vai receber os dados em método POST, no formato de JSON, para cadastrar um novo Animal na população

Exemplo de requisição, entrada e resposta:

![Exemplo de entrada e resposta:](/assets/images/populacoesPost.png)

### 2- Adicionar Animal

* **Endpoint:** http://localhost:3001/animais/cadastra

* **Método:** POST

* **Formato de dados:** JSON

* Vai receber os dados em método POST, no formato de JSON, para cadastrar um novo Animal na base de dados

Exemplo de requisição, entrada e resposta:

![Exemplo de entrada e resposta:](/assets/images/animaisPost.png)

### 3- Buscar Animais

* **Endpoint:** http://localhost:3001/animais/

* **Método:** GET

* **Formato de dados:** JSON

* Vai receber a requisição em método GET, vai retornar os Animais cadastrados na base de dados no formato de JSON

Exemplo de requisição e resposta:

![Exemplo de entrada e resposta:](/assets/images/animaisGET.png)

### 4- Buscar Animais das Populações

* **Endpoint:** http://localhost:3001/populacoes/

* **Método:** GET

* **Formato de dados:** JSON

* Vai receber a requisição em método GET, vai retornar os Animais das Populaçoes cadastrados na base de dados no formato de JSON

Exemplo de requisição e resposta:

![Exemplo de entrada e resposta:](/assets/images/populacoesGET.png)

### 5- Colocar um novo filho

* **Endpoint:** http://localhost:3001/populacoes/ **id do animal de Populacoes, depois do GET (número 4)** /adicionar-filho/

* **Método:** POST

* **Formato de dados:** JSON

* Vai receber o nomeFilho em método POST, no formato de JSON, para cadastrar um novo filho na base de dados.

Exemplo de requisição e resposta:

![Exemplo de entrada e resposta:](/assets/images/filhosPOST.png)

### 6- Buscar Locais e Ações

* **Endpoint:** http://localhost:3001/locais/

* **Método:** GET

* **Formato de dados:** JSON

* Vai receber a requisição em método GET, vai retornar os Locais com ações que beneficiam os Animais cadastrados na base de dados no formato de JSON

Exemplo de requisição e resposta:

![Exemplo de entrada e resposta:](/assets/images/locaisGET.png)