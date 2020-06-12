import React, { useMemo, useState, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { FaPlus } from 'react-icons/fa';

import { Container, Header, ModalCreateResearch } from './styles';

import Table from '../../components/MyResearches/Table';
import SolidButton from '../../components/Common/SolidButton';
import GhostButton from '../../components/Common/GhostButton';
import ShortTextField from '../../components/ResearchFields/ShortTextField';
import LoadingSpinner from '../../components/Common/LoadingSpinner';

import { LIST_OWN_FORMS, CREATE_OWN_FORM } from '../../services/requests/forms';
import getValidationErrors from '../../utils/getValidationErrors';
import createFormSchema from '../../schemas/createForm';

interface CreateFormData {
  researchName: string;
}

const MyReasearches: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const { loading: formsLoading, data: formsData } = useQuery(LIST_OWN_FORMS);
  const [createForm, { loading: createFormLoading }] = useMutation(
    CREATE_OWN_FORM,
  );

  const forms = useMemo(() => {
    if (formsData?.data?.error === null && !formsLoading) {
      return formsData.data.forms;
    }
    return [];
  }, [formsData, formsLoading]);

  const handleCreateResearch = useCallback(
    async (data: CreateFormData) => {
      try {
        await createFormSchema.validate(data, { abortEarly: false });

        const response = await createForm({
          variables: { name: data.researchName, isActive: true },
        });

        if (response.data.createOwnForm.error) {
          throw new Error(response.data.createOwnForm.error.internalCode);
        }

        history.push('/edit_survey');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        const internalCode = err.message as string;
        toast.error(internalCode);
      }
    },
    [createForm, history],
  );

  return (
    <>
      <Container>
        <Header>
          <h1>Minhas pesquisas</h1>
          <SolidButton onClick={() => setOpenCreateModal(true)}>
            <FaPlus size={20} />
            Nova Pesquisa
          </SolidButton>
        </Header>
        <Table forms={forms} />
      </Container>
      <ModalCreateResearch
        isOpen={openCreateModal}
        onRequestClose={() => setOpenCreateModal(false)}
        closeTimeoutMS={300}
      >
        <h3>Criar nova pesquisa</h3>
        <Form ref={formRef} onSubmit={handleCreateResearch}>
          <ShortTextField
            name="researchName"
            id="research-name-field"
            placeholder="Coloque um título para sua pesquisa"
          />
          <div>
            <GhostButton onClick={() => setOpenCreateModal(false)}>
              Voltar
            </GhostButton>
            <SolidButton type="submit">
              {createFormLoading ? <LoadingSpinner /> : 'Continuar'}
            </SolidButton>
          </div>
        </Form>
      </ModalCreateResearch>
    </>
  );
};

export default MyReasearches;
