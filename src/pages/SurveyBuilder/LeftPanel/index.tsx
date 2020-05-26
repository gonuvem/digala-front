import React, { useState, useCallback } from 'react';

import { Container, QuestionsContainer, PanelTabLink } from './styles';

import QuestionBox from '../../../components/QuestionBox';

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

  return (
    <Container
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
      <div>
        <h5>Perguntas Básicas</h5>
        <QuestionsContainer>
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
        </QuestionsContainer>
      </div>
    </Container>
  );
};

export default LeftPanel;
