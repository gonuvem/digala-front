type internalErrorCode = {
  [key: string]: string;
};

const signInErrors: internalErrorCode = {
  600: 'Erro inesperado. Por favor, entre em contato com o suporte',
  630: 'Por favor, verifique novamente os dados enviados',
  700: 'Não existe usuário com esse e-mail',
  709: 'Não existe usuário com esse e-mail',
};

export default signInErrors;
