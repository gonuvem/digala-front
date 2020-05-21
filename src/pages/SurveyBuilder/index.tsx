import React from 'react';
import { uuid } from 'uuidv4';

import { Container } from './styles';

import ShortTextField from '../../components/ShortTextField';
import SingleChoiceField from '../../components/SingleChoiceField';

const SurveyBuilder: React.FC = () => (
  <Container>
    <ShortTextField label="Texto Curto" name="shortText" id={uuid()} />
    <SingleChoiceField />
  </Container>
);

export default SurveyBuilder;
