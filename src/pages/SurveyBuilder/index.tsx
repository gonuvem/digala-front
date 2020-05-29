import React from 'react';

import { Container, Panels } from './styles';

import SolidButton from '../../components/Common/SolidButton';
import LeftPanel from './LeftPanel';
import Preview from './Preview';

const SurveyBuilder: React.FC = () => (
  <Container>
    <Panels>
      <LeftPanel />
      <Preview />
    </Panels>
  </Container>
);

export default SurveyBuilder;
