import React, { useState, useCallback, useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../../layout';
import PageHeader from '../../components/Common/Header';
import Pagination from '../../components/Common/Pagination';
import LoadingSpinner from '../../components/Common/LoadingSpinner';

import {
  Container,
  Navigation,
  Table,
  TableHeader,
  TableRow,
  PanelButton,
  PaginationContainer,
  LoadingContainer,
} from './styles';

import trash from '../../assets/trash_icon.png';
import bookReader from '../../assets/book-reader-icon.png';

import getDistanceBetweenElements from '../../utils/getDistanceBetweenElements';
import { LIST_OWN_RESPONSES } from '../../services/requests/answers';

interface Response {
  id: string;
  createdAt: string;
  answerCount: number;
  questionsCount: number;
}

interface ResponseData {
  _id: string;
  createdAt: string;
  form: {
    questions: {
      _id: string;
    }[];
  };
  answersAndQuestions: {
    question: {
      _id: string;
    };
  }[];
}

const SurveyResults: React.FC = () => {
  const { id } = useParams();

  const [page, setPage] = useState(0);
  const [distanceToTravel, setDistanceToTravel] = useState(0);
  const [activePanel, setActivePanel] = useState(1);

  const { loading: listOwnResponsesLoading, data: responsesData } = useQuery(
    LIST_OWN_RESPONSES,
    {
      variables: {
        form: id,
        page,
      },
    },
  );

  const responses: Response[] = useMemo(() => {
    if (responsesData?.data?.error === null) {
      return responsesData.data.responses.map((response: ResponseData) => {
        return {
          id: response._id,
          createdAt: format(
            parseISO(response.createdAt),
            "dd/MM/yyyy 'às' HH:mm:ss",
          ),
          answerCount: response.answersAndQuestions.length,
          questionsCount: response.form.questions.length,
        };
      });
    }
    return [];
  }, [responsesData]);

  const totalPages = useMemo(() => {
    if (responsesData?.data?.error === null) {
      return responsesData.data.pages;
    }
    return 0;
  }, [responsesData]);

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

  const handlePageChange = useCallback((clickedPage) => {
    setPage(clickedPage);
  }, []);

  return (
    <>
      <PageHeader />
      <Layout>
        <Container>
          <Navigation>
            <h2>Pesquisa Eleitoral Lagoa Alegre</h2>
            <nav>
              <a href="/survey" id="edit">
                Editar
              </a>
              <a href="/survey" id="share">
                Compartilhar
              </a>
              <a href="/survey" id="results">
                Resultados
              </a>
            </nav>
          </Navigation>
          <Table distance={distanceToTravel}>
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
            <TableHeader>
              <h3 style={{ flex: 2 }}>Data</h3>
              <h3 style={{ flex: 1 }}>Localização</h3>
              <h3 style={{ flex: 2 }}>Quantidade de respostas</h3>
              <h3 style={{ flex: 1 }}>Ações</h3>
            </TableHeader>
            {listOwnResponsesLoading && (
              <LoadingContainer>
                <LoadingSpinner />
              </LoadingContainer>
            )}
            {!listOwnResponsesLoading &&
              responses.map((response) => (
                <TableRow key={response.id}>
                  <span style={{ flex: 2 }}>{response.createdAt}</span>
                  <span style={{ flex: 1 }}>Píaui, Teresina</span>
                  <span style={{ flex: 2 }}>
                    {`${response.answerCount} respostas / ${response.questionsCount} perguntas`}
                  </span>

                  <div style={{ flex: 1 }}>
                    <a href="/survey">
                      <img src={bookReader} alt="Ver" />
                      <span>Ver</span>
                    </a>
                    <button type="button">
                      <img src={trash} alt="Deletar" />
                      <span>Deletar</span>
                    </button>
                  </div>
                </TableRow>
              ))}
            <PaginationContainer>
              <Pagination
                onPageChange={handlePageChange}
                actualPage={page}
                totalPages={totalPages}
                numberOfPagesToShow={3}
              />
            </PaginationContainer>
          </Table>
        </Container>
      </Layout>
    </>
  );
};

export default SurveyResults;
