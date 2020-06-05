import React from 'react';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './styles';

const Switch: React.FC = () => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};

export default Switch;
