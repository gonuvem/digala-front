import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { Container, PanelTabLink, PanelArea } from './styles';

import ResearchStyles from './ResearchStyles';
import ResearchTypes from './ResearchTypes';
import ResearchConfigurations from './ResearchConfigurations';

import getDistanceBetweenElements from '../../../utils/getDistanceBetweenElements';
import { ApplicationState } from '../../../store';
import { Form } from '../../../store/ducks/forms/types';

const TabLinks: string[] = ['Tipos', 'Estilos', 'Configurações'];

interface LeftPanelProps {
  questionsTypes: [];
}

const LeftPanel: React.FC<LeftPanelProps> = ({ questionsTypes }) => {
  const [activePanelNumber, setActivePanelNumber] = useState(0);
  const [distanceToTravel, setDistanceToTravel] = useState(0);

  const formData = useSelector<ApplicationState, Form | null>(
    (state) => state.forms.form,
  );

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

  const renderSection = (): React.ReactNode => {
    switch (activePanelNumber) {
      case 1:
        return <ResearchStyles formData={formData} />;
      case 2:
        return <ResearchConfigurations formData={formData} />;
      default:
        return <ResearchTypes questions={questionsTypes} />;
    }
  };

  console.log(formData);

  return (
    <Container>
      <h5>{formData?.config.name}</h5>
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
