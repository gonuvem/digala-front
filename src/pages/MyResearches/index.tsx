import React, { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FaPlus } from 'react-icons/fa';

import Table from '../../components/MyResearches/Table';
import SolidButton from '../../components/Common/SolidButton';

import { LIST_OWN_FORMS } from '../../services/requests/forms';

import { Container, Header } from './styles';

const MyReasearches: React.FC = () => {
  const { loading: formsLoading, data: formsData } = useQuery(LIST_OWN_FORMS);

  const forms = useMemo(() => {
    if (formsData?.data?.error === null && !formsLoading) {
      return formsData.data.forms;
    }
    return [];
  }, [formsData, formsLoading]);

  return (
    <Container>
      <Header>
        <h1>Minhas pesquisas</h1>
        <SolidButton text="Nova Pesquisa" icon={FaPlus} />
      </Header>
      <Table forms={forms} />
    </Container>
  );
};

export default MyReasearches;
