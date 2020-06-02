import React, { useState, useCallback } from 'react';

import { Container, PanelTabLink, PanelArea } from './styles';

import ResearchStyles from './ResearchStyles';
import ResearchTypes from './ResearchTypes';

import getDistanceBetweenElements from '../../../utils/getDistanceBetweenElements';

const TabLinks: string[] = ['Tipos', 'Estilos', 'Configurações'];

const LeftPanel: React.FC = () => {
  const [activePanelNumber, setActivePanelNumber] = useState(0);
  const [distanceToTravel, setDistanceToTravel] = useState(0);

  const handleTabChange = useCallback(
    (tab) => {
      const distanceBetweenTabs = getDistanceBetweenElements(
        `panellink-${activePanelNumber}`,
        `panellink-${tab}`,
      );

      setDistanceToTravel((state) => state + distanceBetweenTabs);
      setActivePanelNumber(tab);
    },
    [activePanelNumber],
  );

  function renderSection() {
    switch (activePanelNumber) {
      case 0:
        return <ResearchTypes />;
      case 1:
        return <ResearchStyles />;
      case 2:
        return <ResearchStyles />;
    }
  }

  return (
    <Container>
      <h5>Pesquisa Eleitoral de Lagoa Alegre</h5>
      <PanelArea
        activePanelNumber={activePanelNumber}
        distance={distanceToTravel}
      >
        <nav>
          {TabLinks.map((tabLink, index) => (
            <PanelTabLink
              id={`panellink-${index}`}
              isActive={activePanelNumber === index}
              onClick={() => handleTabChange(index)}
            >
              {tabLink}
            </PanelTabLink>
          ))}
        </nav>
        {renderSection()}
      </PanelArea>
    </Container>
  );
};

export default LeftPanel;
