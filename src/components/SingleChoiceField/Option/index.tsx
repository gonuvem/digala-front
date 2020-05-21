import React from 'react';

import { Container } from './styles';

const Option: React.FC = () => (
  <Container htmlFor="SingleChoiceField_option">
    <input id="SingleChoiceField_option" type="radio" name="radio_btn" />
    <span />
    Escolha ùnica
  </Container>
);

export default Option;
