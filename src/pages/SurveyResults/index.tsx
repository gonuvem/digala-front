import React, { useState, useCallback, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import Layout from '../../layout';
import PageHeader from '../../components/Common/Header';
import IndividualResponses from './IndividualResponses';
import ResponsesAnalysis from './ResponsesAnalysis';

import { Container, Navigation, Panel, PanelButton } from './styles';

import getDistanceBetweenElements from '../../utils/getDistanceBetweenElements';
import { READ_FORM } from '../../services/requests/forms';

const SurveyResults: React.FC = () => {
  const { id } = useParams();

  const [distanceToTravel, setDistanceToTravel] = useState(0);
  const [activePanel, setActivePanel] = useState(1);

  const { data: formData, loading: formLoading } = useQuery(READ_FORM, {
    variables: { id },
  });

  const surveyName = useMemo(() => {
    if (formData && formData.data) {
      return formData.data.form.config.name;
    }
    return '';
  }, [formData]);

  const ComponentToRender = useMemo(() => {
    switch (activePanel) {
      case 1:
        return <IndividualResponses formId={id} />;
      case 2:
        return <ResponsesAnalysis formId={id} />;
      default:
        return <IndividualResponses formId={id} />;
    }
  }, [activePanel, id]);

  const handleTabChange = useCallback(
    (tab) => {
      const distanceBetweenTabs = getDistanceBetweenElements(
        `panel-${activePanel}`,
        `panel-${tab}`,
      );

      setDistanceToTravel((state) => state + distanceBetweenTabs);
      setActivePanel(tab);
    },
    [activePanel],
  );

  return (
    <>
      <PageHeader />
      <Layout>
        <Container>
          <Navigation>
            <h2>{surveyName}</h2>
            <nav>
              <a href={`/edit_survey/${id}`} id="edit">
                Editar
              </a>
              <a href={`/share/${id}`} id="share">
                Compartilhar
              </a>
              <a href={`/survey_results/${id}`} id="results">
                Resultados
              </a>
            </nav>
          </Navigation>
          <Panel distance={distanceToTravel}>
            <nav>
              <PanelButton
                type="button"
                onClick={() => handleTabChange(1)}
                id="panel-1"
                selected={activePanel === 1}
              >
                Respostas individuais
              </PanelButton>
              <PanelButton
                type="button"
                onClick={() => handleTabChange(2)}
                id="panel-2"
                selected={activePanel === 2}
              >
                Análise
              </PanelButton>
              <PanelButton
                type="button"
                onClick={() => handleTabChange(3)}
                id="panel-3"
                selected={activePanel === 3}
              >
                Exportar
              </PanelButton>
            </nav>
            {ComponentToRender}
          </Panel>
        </Container>
      </Layout>
    </>
  );
};

export default SurveyResults;
