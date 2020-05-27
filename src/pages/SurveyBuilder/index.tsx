import React from 'react';

import { Container, Col01 } from './styles';

import LeftPanel from './LeftPanel';

// Col01 component is just for test, erase it.

const SurveyBuilder: React.FC = () => (
  <Container>
    <Col01>
      <LeftPanel />
    </Col01>
  </Container>
);

export default SurveyBuilder;
