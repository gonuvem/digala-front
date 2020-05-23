import React, { useState, useCallback } from 'react';

import { Container, QuestionsContainer, PanelTabLink } from './styles';

const TabLinks: string[] = ['Tipos', 'Estilos', 'Configurações'];

const LeftPanel: React.FC = () => {
  const [activePanelNumber, setActivePanelNumber] = useState(0);

  const handleTabChange = useCallback((tab) => {
    setActivePanelNumber(tab);
  }, []);

  return (
    <Container activePanelNumber={activePanelNumber}>
      <nav>
        {TabLinks.map((tabLink, index) => (
          <PanelTabLink
            isActive={activePanelNumber === index}
            onClick={() => handleTabChange(index)}
          >
            {tabLink}
          </PanelTabLink>
        ))}
      </nav>
      <div>
        <h5>Perguntas Básicas</h5>
        <QuestionsContainer />
      </div>
    </Container>
  );
};

export default LeftPanel;
