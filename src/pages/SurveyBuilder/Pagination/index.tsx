import React from 'react';
import { FiBookmark, FiPlusCircle } from 'react-icons/fi';

import SolidButton from '../../../components/Common/SolidButton';

import { Container, PanelArea } from './styles';

const Pagination: React.FC = () => (
  <Container>
    <SolidButton text="Publicar" />
    <PanelArea>
      <FiBookmark size={32} />
      <span>Página 01</span>
      <div id="divisor" />
      <FiPlusCircle size={24} />
    </PanelArea>
  </Container>
);

export default Pagination;
