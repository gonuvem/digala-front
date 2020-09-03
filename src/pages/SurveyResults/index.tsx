import React, { useState, useCallback } from 'react';

import Layout from '../../layout';
import PageHeader from '../../components/Common/Header';
import Pagination from '../../components/Common/Pagination';

import {
  Container,
  Navigation,
  Table,
  TableHeader,
  TableRow,
  PanelButton,
  PaginationContainer,
} from './styles';

import trash from '../../assets/trash_icon.png';
import bookReader from '../../assets/book-reader-icon.png';

import getDistanceBetweenElements from '../../utils/getDistanceBetweenElements';

const SurveyResults: React.FC = () => {
  const [page, setPage] = useState(0);
  const [distanceToTravel, setDistanceToTravel] = useState(0);
  const [activePanel, setActivePanel] = useState(1);

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
            <TableRow>
              <span style={{ flex: 2 }}>21/12/2019 às 12:20:35</span>
              <span style={{ flex: 1 }}>Píaui, Teresina</span>
              <span style={{ flex: 2 }}>12 respostas / 24 perguntas</span>

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
            <PaginationContainer>
              <Pagination
                onPageChange={handlePageChange}
                actualPage={page}
                totalPages={5}
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
