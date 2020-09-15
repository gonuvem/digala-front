import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface SolidButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasShadow?: boolean;
  colorScheme?: 'info' | 'danger' | 'disabled';
}

const SolidButton: React.FC<SolidButtonProps> = ({
  children,
  hasShadow = true,
  colorScheme = 'info',
  ...rest
}) => (
  <Container colorScheme={colorScheme} hasShadow={hasShadow} {...rest}>
    {children}
  </Container>
);

export default SolidButton;
