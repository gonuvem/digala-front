import React, { useMemo, useState, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Form } from '@unform/web';
import { FaPlus } from 'react-icons/fa';

import Table from '../../components/MyResearches/Table';
import SolidButton from '../../components/Common/SolidButton';
import GhostButton from '../../components/Common/GhostButton';
import ShortTextField from '../../components/Common/ShortTextField';

import { LIST_OWN_FORMS } from '../../services/requests/forms';

import { Container, Header, ModalCreateResearch } from './styles';

const MyReasearches: React.FC = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const { loading: formsLoading, data: formsData } = useQuery(LIST_OWN_FORMS);

  const forms = useMemo(() => {
    if (formsData?.data?.error === null && !formsLoading) {
      return formsData.data.forms;
    }
    return [];
  }, [formsData, formsLoading]);

  const handleCreateResearch = useCallback(() => {}, []);

  return (
    <>
      <Container>
        <Header>
          <h1>Minhas pesquisas</h1>
          <SolidButton
            onClick={() => setOpenCreateModal(true)}
            text="Nova Pesquisa"
            icon={FaPlus}
          />
        </Header>
        <Table forms={forms} />
      </Container>
      <ModalCreateResearch isOpen={openCreateModal} closeTimeoutMS={100}>
        <h3>Criar nova pesquisa</h3>
        <Form onSubmit={handleCreateResearch}>
          <ShortTextField
            label=""
            name="researchName"
            id="research-name-field"
            placeholder="Coloque um título para sua pesquisa"
          />
          <div>
            <GhostButton>Voltar</GhostButton>
            <SolidButton type="button" text="Continuar" />
          </div>
        </Form>
      </ModalCreateResearch>
    </>
  );
};

export default MyReasearches;
