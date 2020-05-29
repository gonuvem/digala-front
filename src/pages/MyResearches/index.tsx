import React, { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Table from '../../components/MyResearches/Table';
import { LIST_OWN_FORMS } from '../../services/requests/forms';

import { Container, Header } from './styles';

import add from '../../assets/add_icon.png';

const MyReasearches: React.FC = () => {
  const { loading: formsLoading, data: formsData } = useQuery(LIST_OWN_FORMS);

  const forms = useMemo(() => {
    if (formsData?.data?.error === null && !formsLoading) {
      return formsData.data.forms;
    } else {
      return [];
    }
  }, [formsData, formsLoading]);

  return (
    <Container>
      <Header>
        <h1>Minhas pesquisas</h1>
        <a href="/">
          <img src={add} alt="Nova pesquisa" />
          Nova Pesquisa
        </a>
      </Header>
      <Table forms={forms} />
    </Container>
  );
};

export default MyReasearches;
