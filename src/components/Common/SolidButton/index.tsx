import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface SolidButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasShadow?: boolean;
}

const SolidButton: React.FC<SolidButtonProps> = ({
  children,
  hasShadow = true,
  ...rest
}) => (
  <Container hasShadow={hasShadow} {...rest}>
    {children}
  </Container>
);

export default SolidButton;
