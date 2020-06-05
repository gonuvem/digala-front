type internalErrorCode = {
  [key: string]: string;
};

const forgotErrors: internalErrorCode = {
  600: 'Erro inesperado. Por favor, entre em contato com o suporte',
  630: 'Por favor, verifique novamente os dados enviados',
  700: 'Não existe usuário com esse e-mail',
  910: 'Ocorreu um erro ao enviar o e-mail, por favor tente novamente',
};

export default forgotErrors;
