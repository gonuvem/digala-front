import React from 'react';
import { uuid } from 'uuidv4';

import { Container } from './styles';

import ShortTextField from '../../components/ShortTextField';
import SingleChoiceField from '../../components/SingleChoiceField';

const choices = ['Escolha 01', 'Escolha 02', 'Escolha 03'];

const SurveyBuilder: React.FC = () => (
  <Container>
    <ShortTextField label="Texto Curto" name="shortText" id={uuid()} />
    <SingleChoiceField
      label="Escolha Única"
      name="singleChoice"
      id={uuid()}
      choices={choices}
    />
  </Container>
);

export default SurveyBuilder;
