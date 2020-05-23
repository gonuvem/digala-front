import React, { useState, useCallback } from 'react';

import { Container, QuestionsContainer, PanelTabLink } from './styles';

const LeftPanel: React.FC = () => {
  const [activePanelNumber, setActivePanelNumber] = useState(0);

  const handleTabChange = useCallback((tab) => {
    setActivePanelNumber(tab);
  }, []);

  return (
    <Container activePanelNumber={activePanelNumber}>
      <nav>
        <PanelTabLink
          isActive={activePanelNumber === 0}
          onClick={() => handleTabChange(0)}
        >
          Tipos
        </PanelTabLink>
        <PanelTabLink
          isActive={activePanelNumber === 1}
          onClick={() => handleTabChange(1)}
        >
          Estilos
        </PanelTabLink>
        <PanelTabLink
          isActive={activePanelNumber === 2}
          onClick={() => handleTabChange(2)}
        >
          Configurações
        </PanelTabLink>
      </nav>
      <div>
        <h5>Perguntas Básicas</h5>
        <QuestionsContainer />
      </div>
    </Container>
  );
};

export default LeftPanel;
