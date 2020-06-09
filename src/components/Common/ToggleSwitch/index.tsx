import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';

import { CheckBoxWrapper, CheckBox, CheckBoxLabel, Container } from './styles';

interface ToggleSwitchProps {
  name: string;
  label?: string;
  helpHint?: string;
}

const Switch: React.FC<ToggleSwitchProps> = ({ name, label, helpHint }) => {
  return (
    <Container>
      <div>
        {label && <span>{label}</span>}
        {!!helpHint && <FiHelpCircle />}
      </div>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </Container>
  );
};

export default Switch;
