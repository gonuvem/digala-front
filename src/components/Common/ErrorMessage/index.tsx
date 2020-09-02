import React from 'react';

import { Container } from './styles';

interface ErrorMessageProps {
  message?: string;
  style: any;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  style,
}) => {
  return <Container style={style}>{message}</Container>;
};

export default ErrorMessage;
