type internalErrorCode = {
  [key: string]: string;
};

const renewErrors: internalErrorCode = {
  600: 'Erro inesperado. Por favor, entre em contato com o suporte',
  630: 'Por favor, verifique novamente os dados enviados',
  700: 'Não existe usuário com esse e-mail',
  704: 'O código enviado está incorreto',
};

export default renewErrors;
