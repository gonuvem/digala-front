import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type SolidButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SolidButton: React.FC<SolidButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default SolidButton;
