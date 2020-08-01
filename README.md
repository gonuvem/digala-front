## BUGS

* Ao enviar questão do tipo ShortText ele tá indo como LongText
* Ao adicionar duas questões do mesmo tipo o painel de configuração não é recarregado
* Campo de data está sempre pedindo o tempo também
* O componente de imagem do escolha de imagens está ficando esticado com imagens longas
* O usuário não pode deselecionar uma opção no componente de ImageChoice
* Não está implementado o debounce nos paines de configuração dos inputs


# Survey Page

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
