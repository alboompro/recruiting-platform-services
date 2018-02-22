# My History

----


> Neste arquivos será descrito todas etapas que levaram a conclusão do projeto. Resumindo, um diário do desenvolvimento.

----
## 1. Primeira Etapa
* Para trabalhar com o CSS optei por utilizar um pré-processador: SASS;

* Utilizado Gulp para minificar os arquivos SASS e transformá-los em arquivos CSS;

* Foi feito dois arquivos SASS, PRINCIPAL e GENÉRICO onde:
 - Principal:  Conter blocos reutilizáveis e estilo de todas as páginas;
 - Genérico: Variáveis, mixins e media querys;

* Nomes de classes de forma hereditária;
* Pelo fato dos checkboxs terem um estilo diferente, pesquisei códigos que ensinassem como  seria possível fazê-los, encontrei explicações simples que me ajudaram nisso; 

* Um arquivo Js foi criado para manipular os checkboxs;

* Para a contagem regressiva da última tela,  encontrei um código em EcmaScript6 que supria minhas necessidades. Fiz a transpilação para o EcmaScript5 e utilizei ele.

* Finalizado a interface do projeto, dei início ao back-end;


----
## 2. Segunda Etapa

* Linguagem escolhida: PHP.  O fato de já ter familiaridade e projetos feitos com esse tipo de programação foi crucial na escolha, além do tempo para a entrega do projeto;

* Os Controllers e Models foram sendo criados de acordo com a sua necessidade;

* Na primeira tela *‘Cadastrar’*, senti a necessidade de usar Ajax para enviar as informações do JavaScript para o PHP;

* Na segunda tela *‘Produtos’*, não foi preciso o uso de Ajax, apenas peguei os id’s dos cafés marcados e  passei pela URL para a próxima página;

* A tela de *‘Complementos’* foi onde  fiquei a maior parte do desenvolvimento, tentando formas de passar as combinações de Café e Complementos, de modo que seria fácil de saber qual complemento é de qual café (no caso de forem escolhidos dois cafés);

* O melhor jeito encontrado foi um objeto contendo as informações do pedido dentro de um arquivo JavaScript;

* No mesmo arquivo de JS também foi feito o cálculo do tempo que o pedido demoraria pra ficar pronto;

* Os dados novamente foram passados por Ajax, para que no PHP fossem inseridos nas suas respectivas  tabelas do Banco de Dados;

* O tempo total do pedido foi guardado na sessão, para que pudesse ser acessado pela pagina ‘Final’, e assim ser inserido no script da contagem regressiva;

* Na pagina ‘Final’, foi inserido o tempo em um input escondido, no arquivo JS do contador o valor deste input foi acessado e inserido como variável na função de início.

* Com tudo funcionando, voltei para fazer os ajustes, como validações e verificações ;

* Por fim, refatorei os códigos, dividindo em funções, deixando-os legíveis e o mais breve possível.

