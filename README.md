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
- O campo deve estar conectado com o unform para enviar seu valor para o formulário

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
