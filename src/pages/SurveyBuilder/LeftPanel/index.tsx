import React, { useState, useCallback, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Container, PanelTabLink, PanelArea } from './styles';

import ResearchStyles from './ResearchStyles';
import ResearchTypes from './ResearchTypes';
import ResearchConfigurations from './ResearchConfigurations';

import getDistanceBetweenElements from '../../../utils/getDistanceBetweenElements';

import { LIST_QUESTION_TYPES } from '../../../services/requests/questions';

const TabLinks: string[] = ['Tipos', 'Estilos', 'Configurações'];

const LeftPanel: React.FC = () => {
  const [activePanelNumber, setActivePanelNumber] = useState(0);
  const [distanceToTravel, setDistanceToTravel] = useState(0);

  const { data: questionTypesData } = useQuery(LIST_QUESTION_TYPES);

  const questionTypes = useMemo(
    () =>
      questionTypesData?.data?.error === null
        ? questionTypesData?.data?.types
        : [],
    [questionTypesData],
  );

  console.log('Question Types >> ', questionTypes);

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

  const renderSection = () => {
    switch (activePanelNumber) {
      case 1:
        return <ResearchStyles />;
      case 2:
        return <ResearchConfigurations />;
      default:
        return <ResearchTypes questions={questionTypes} />;
    }
  };

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
