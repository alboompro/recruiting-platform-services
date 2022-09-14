# Teste para recrutamento Plataforma e Serviços

O teste envolvia a criação de um serviço de geração de cupons de desconto através de um totem de autoatendimento. Como parte do processo, o cliente poderia solicitar, caso quisesse, um ou mais cafés.

### Requisitos para rodar as aplicações

- NPM
- Docker
- Docker Compose
- Git

### Tecnologias escolhidas

- Front-end
  * React (utilizando o Vite como ferramenta de build)
  * Typescript
  * Styled components 
- Back-end
  * Node.js + Express
  * Typescript

- Banco de dados
  * MySQL
  * Docker/Docker Compose para subir os containeres tanto da API quanto do banco de dados

### Como rodar as aplicações

1. Clone este repositório
2. Abra um terminal e navegue até a pasta local do repositório clonado
3. Mude para a branch **murilloMesquita** através do comando:
    ```bash
    git checkout murilloMesquita
    ```

4. Novamente pelo terminal, navegue até a pasta **smart_coffee_back**
    * rode os seguintes comandos:
    ```bash
    npm install
    docker-compose up -d
    ```
    * esses comandos irão subir tanto a API quanto o banco de dados. Além disso, através do *docker-compose*, será rodado o script para criar e alimentar o banco de dados. Para a API ser disponibilizada sem problemas, deixe disponível a porta 3000 do *localhost*
5. Volte ao diretório raiz e, então, navegue até a pasta **smart_coffee_front**
    * rode os seguintes comandos:
    ```bash
    npm install
    npm run dev
    ```
6. Abra o navegador e acesse a aplicação web pela URL disponibilizada pelo Vite (provavelmente a porta 5173), como abaixo:
    ```bash
    http://localhost:5173
    ```
    * obs: caso tenha alguma aplicação rodando na porta 5173, pare-a temporariamente.
7. Para derrubar a aplicação web, pressione `CTRL+C` no terminal.
8. Em seguida, volte à pasta **smart_coffee_back** e rode o seguinte comando:
    ```bash
    docker-compose down
    ```
    

### Fluxo e funcionalidades da aplicação front-end

1. **Tela de cadastros**
    * usuário preenche nome e e-mail e clica em **Cadastrar**.
    * caso o e-mail preenchido seja encontrado no banco de dados, uma mensagem de erro é retornada ao usuário e ele permanece na tela. Caso o cadastro ocorra normalmente, ele é redirecionado para a tela de **Produtos**
2. **Tela de produtos**
    * usuário pode escolher até 2 tipos de café, inclusive nenhum.
    * caso o usuário não escolha nenhum café e clique em **Continuar**, é mostrado um modal para a confirmação do usuário. Caso ele confirme, a aplicação é redirecionada para a **Tela final**, onde o usuário poderá imprimir o cupom de desconto. Caso contrário, ele volta a **Tela de produtos**.
    * caso o usuário escolha 1 ou 2 cafés e clique em **Continuar**, ele será redirecionado para a **Tela de complementos**.
3. **Tela de complementos**
    * nessa tela o usuário pode escolher adicionar os complementos nos respectivos cafés. 
    * não há a obrigatoriedade de escolher um complemento e a escolha também não é limitada.
    * caso clique em **Finalizar**, a aplicação é redirecionada para a **Tela final**.
    * caso clique em voltar, o usuário é redirecionado novamente a **Tela de produtos**
4. **Tela final**
    * Nesta tela, caso o usuário tenha algum café sendo preparado, é mostrado um *timer* com o tempo de preparação restante do(s) café(s), além de uma barra de progresso. Quando termina o tempo de preparação, é mostrada uma mensagem de sucesso para o usuário.
    *Caso o usuário não tenha escolhido nenhum café, é mostrado apenas uma mensagem.
    
    * Além disso, para qualquer caso, também é mostrado o cupom gerado, além de um botão para voltar à **Tela inicial** e um botão para imprimir o cupom. Caso o usuário clique em **Imprimir cupom** é mostrada uma mensagem de sucesso na tela.


### Histórico de commits

Como desenvolvi o projeto em dois repositórios diferentes (um para o front e um para o back) os commits ficaram separados e em seus respectivos diretórios. Neste repositório especificamente, as pastas só foram incorporadas e não possue o histórico de desenvolvimento das aplicações.  
Para isso, disponibilizo os links dos repositórios do front e do back, respectivamente, em que estão salvos esse histórico:
- https://github.com/murillopm/smart-coffee-front
- https://github.com/murillopm/smart-coffee-api

### Histórico de desenvolvimento

O histórico de desenvolvimento pode ser acessado em [HISTORY.md](HISTORY.md)
