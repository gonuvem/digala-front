import React from 'react';

import { Container, Panels } from './styles';

import LeftPanel from './LeftPanel';
import Preview from './Preview';
import Pagination from './Pagination';

const SurveyBuilder: React.FC = () => (
  <Container>
    <Panels>
      <LeftPanel />
      <Preview />
      <Pagination />
    </Panels>
  </Container>
);

export default SurveyBuilder;
