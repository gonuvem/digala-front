import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface SolidButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | React.ReactNode;
  icon?: IconType;
}

const SolidButton: React.FC<SolidButtonProps> = ({
  text,
  icon: Icon,
  ...rest
}) => (
  <Container {...rest}>
    {Icon && <Icon size={20} />}
    {text}
  </Container>
);

export default SolidButton;
