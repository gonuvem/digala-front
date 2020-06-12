import React, { useState, useCallback } from 'react';
import { FiBookmark, FiPlusCircle } from 'react-icons/fi';

import SolidButton from '../../../components/Common/SolidButton';

import { Container, PanelArea } from './styles';

const Pagination: React.FC = () => {
  const [pagesCount, setPagesCount] = useState(1);

  const handleCreatePage = useCallback(
    () => setPagesCount((state) => state + 1),
    [],
  );

  return (
    <Container>
      <SolidButton>Publicar</SolidButton>
      <PanelArea>
        {[...Array(pagesCount)].map((e, i) => (
          <>
            <FiBookmark size={32} />
            <span>{`Página ${i + 1}`}</span>
            <div id="divisor" />
          </>
        ))}
        <FiPlusCircle size={24} onClick={handleCreatePage} />
      </PanelArea>
    </Container>
  );
};

export default Pagination;
