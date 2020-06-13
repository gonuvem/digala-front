import React, { useState, useCallback, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';

import { Container, PanelTabLink, PanelArea } from './styles';

import ResearchStyles from './ResearchStyles';
import ResearchTypes from './ResearchTypes';
import ResearchConfigurations from './ResearchConfigurations';

import getDistanceBetweenElements from '../../../utils/getDistanceBetweenElements';
import { LIST_QUESTION_TYPES } from '../../../services/requests/questions';
import { ApplicationState } from '../../../store';
import { Form } from '../../../store/ducks/forms/types';

const TabLinks: string[] = ['Tipos', 'Estilos', 'Configurações'];

const LeftPanel: React.FC = () => {
  const [activePanelNumber, setActivePanelNumber] = useState(0);
  const [distanceToTravel, setDistanceToTravel] = useState(0);

  const formData = useSelector<ApplicationState, Form | null>(
    (state) => state.forms.form,
  );

  const { data: questionTypesData } = useQuery(LIST_QUESTION_TYPES);

  const questionTypes = useMemo(
    () =>
      questionTypesData?.data?.error === null
        ? questionTypesData?.data?.types
        : [],
    [questionTypesData],
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
        return <ResearchStyles />;
      case 2:
        return <ResearchConfigurations formData={formData} />;
      default:
        return <ResearchTypes questions={questionTypes} />;
    }
  };

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
