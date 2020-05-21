import React from 'react';
import { uuid } from 'uuidv4';

import { Container } from './styles';

import ShortTextField from '../../components/ShortTextField';

const SurveyBuilder: React.FC = () => (
  <Container>
    <ShortTextField name="shortText" id={uuid()} />
  </Container>
);

export default SurveyBuilder;
