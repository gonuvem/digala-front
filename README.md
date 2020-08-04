# BUGS

* Ao enviar questão do tipo ShortText ele tá indo como LongText
* Ao adicionar duas questões do mesmo tipo o painel de configuração não é recarregado
* Campo de data está sempre pedindo o tempo também
* O componente de imagem do escolha de imagens está ficando esticado com imagens longas
* O usuário não pode deselecionar uma opção no componente de ImageChoice
* Não está implementado o debounce nos paines de configuração dos inputs
* No componente de SingleChoice ele está apenas mostrando a opção outros mas não envia ela para a api
* Não está recuperando da api corretamente o valor do select field do tipo da barra de progresso
* Está dando erro 400 quando o usuário tentar publicar novamente após já ter publicado
* Respostas de erro durante o cadastro não estão sendo tratadas devidamente, está sendo mostrado no toast a menssagem que vem da api
* No campo de Multipla Escolha, está dando erro ao enviar para a api a quantidade de opções selecionaveis
* No campo do NPS ao usar os botões de incrementar e decrementar, está sendo possível ir além dos limites inferior e superior
* No campo numérico está dando erro ao enviar para API os campos de maxValue e minValue, eles estão no formato string e a api espera um inteiro
* Ao desabilitar o limitador, mesmo assim ele continua enviando o maxValue e o minValue para a api.
* O campo de reodernar as opções está dando um warning e isso está afetando a performance do componente
* O campo de slider está dando erro ao enviar para api os valores de minimo e máximo após alteração. Eles estão sendo enviados como uma string enquanto a api espera um número.
* O espaçamento da tabela de Matriz está muito pequeno
* Ao remover uma linha ou coluna durante a edição da matriz está ocorrendo um erro onde valores são substituidos e a impressão que dar é que você está apagando o elemento errado.
* O espaçamento no campo de texto longo entre a descrição e o input está maior que os outros.
* Possível bug durante o primeira carregamento da página da pesquisa gerada, está acessando um valor de uma variável undefined
* Existe uma regra de margin para corrigir o espaçamento das opções no componente de multipla escolha quando ele está em seu formato horizontal, que está interferindo no seu display vertical
* Ao criar uma nova pesquisa, o redirecionamento não está levando para a página do survey builder
* Na parte de tabelas não tá tendo paginação
* No painel de configuração do Texto Longo o campo Placeholder está como 'label'
* O fluxo de atualizar não está deixando publicar a pesquisa com nenhuma questão


# Survey Builder

**RF**

- O usuário deverá poder remover questões adicionadas
- O usuário deverá poder atualizar a configuração das questões que já foram adicionadas

**RN**

- Caso a questão já esteja adicionada, ela deverá ser atualizada e não adicionada novamente

# Survey Page

**RF**

- O usuário deverá poder escolher o tipo da barra de progresso da pesquisa.

**RN**

- Ao enviar as respostas, checar quais tem o atributo isRequired ativo para validar obrigatoriedade
- Ao disparar o envio das questões é preciso também mudar o estado da pesquisa para carregando

## E-mail Field

**RN**

- Validar se o e-mail é um formato válido, caso a opção de validar estiver ativa

## Datetime Field

**RN**

- O input de tempo só poderá aparecer se o usuário explicitar isso na configuração do campo

## Image Choice Field

**RN**

- O campo deve estar conectado com o unform para enviar seu valor para o formulário

## Single Choice Field

**RN**

- O campo deve estar conectado com o unform para enviar seu valor para o formulário

## Link Field

**RN**

- Validar se o link é um formato válido, caso a opção de validar estiver ativa

## Multiple Choice Field

**RF**

- O usuário poderá selecionar somente a quentidade permitida, quando a configuração correspondente estiver ativa

**RN**

- O campo deve estar conectado com o unform para enviar seu valor para o formulário

## Nps Field

**RN**

- Ao passar o mouse por cima de uma opção, uma animação de hover deve acontecer
- O campo deve estar conectado com o unform para enviar seu valor para o formulário

## Numeric Field

**RN**

- Quando no estado de erro, o input deve sinalizar para o usuário seu estado e auxiliar na correção do erro.

## Sort Field

**RN**

- O campo deve estar conectado com o unform para enviar seu valor para o formulário
- Quando no estado de erro, o input deve sinalizar para o usuário seu estado e auxiliar na correção do erro.

## Slider Field

**RN**

- O campo deve estar conectado com o unform para enviar seu valor para o formulário
- O valor no seletor deve ficar oculto quando a configuração correspondente estiver ativada

## Matrix Field

**RF**

- O usuário deve poder marcar mais de um elemento por linha quando a configuração correspondente estiver ativa.

**RN**

- O campo deve estar conectado com o unform para enviar seu valor para o formulário


### OBS:

* Seria bom organizar as interfaces dos componentes para elas serem utilizadas em outros arquivos, como na função ***mountQuestionPayload***;

* Temos que gerenciar melhor a memória no front, atualmente temos dados duplicados em três lugares: Redux, Apollo e Estado Local. A priori eu penso logo em não usara cache do Apollo mais.

* Tem que revisar o projeto para corrigir os renders que estão ocorrendo mais do que o necessário.

* Os campos tem que ter uma estrutura mais padronizada para funcionarem em melhor harmonia
