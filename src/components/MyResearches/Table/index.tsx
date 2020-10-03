import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { FiEye } from 'react-icons/fi';

import { DELETE_FORM } from '../../../services/requests/forms';

import SolidButton from '../../Common/SolidButton';
import GhostButton from '../../Common/GhostButton';
import Modal from '../../Common/Modal';

import {
  Name,
  CreatedAt,
  Answers,
  Status,
  Actions,
  TableLabels,
  TableRow,
  ColorStatus,
  EditLabel,
  DeleteLabel,
  Separator,
  ModalContent,
} from './styles';

import { formtDate } from '../../../utils/dates';

import edit from '../../../assets/edit_icon.png';
import trash from '../../../assets/trash_icon.png';

interface TableProps {
  forms: FormData[];
}

interface FormData {
  _id: string;
  numResponses: number;
  isActive: boolean;
  createdAt: string;
  config: {
    name: string;
  };
}

const Table: React.FC<TableProps> = ({ forms }) => {
  const [deleteResearch, setDeleteReasearch] = useState(false);
  const [idForm, setIdForm] = useState('');
  const [formDelete, { loading: deleteLoading, error }] = useMutation(
    DELETE_FORM,
  );
  const history = useHistory();

  const deleteForm = useCallback(() => {
    formDelete({ variables: { id: idForm } });
    if (!error) {
      setDeleteReasearch(false);
    }
  }, [error, formDelete, idForm]);

  const showModal = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
      event.stopPropagation();
      setIdForm(id);
      setDeleteReasearch(true);
    },
    [],
  );

  const handleRowClick = useCallback(
    (surveyId: string) => {
      history.push(`/edit_survey/${surveyId}`);
    },
    [history],
  );

  const listForms = (form: FormData): React.ReactElement => (
    <div key={form._id}>
      <TableRow onClick={() => handleRowClick(form._id)}>
        <Name>
          <p>{form.config.name}</p>
        </Name>
        <CreatedAt>
          <p>{formtDate(form.createdAt)}</p>
        </CreatedAt>
        <Answers>
          <p>{form.numResponses} envios</p>
        </Answers>
        <Status>
          <ColorStatus isActive={form.isActive} />
          <p>{form.isActive ? 'Ativa' : 'Finalizado'}</p>
        </Status>
        <Actions onClick={(event) => event.stopPropagation()}>
          <Link target="blank" to={`survey/${form._id}`}>
            <FiEye size={20} color="#3475D2" />
            <EditLabel>Ver</EditLabel>
          </Link>
          <div />
          <Link to={`edit_survey/${form._id}`}>
            <img src={edit} alt="Editar" />
            <EditLabel>Editar</EditLabel>
          </Link>
          <div />
          <button type="button" onClick={(event) => showModal(event, form._id)}>
            <img src={trash} alt="Deletar" />
            <DeleteLabel>Deletar</DeleteLabel>
          </button>
        </Actions>
      </TableRow>
      <Separator />
    </div>
  );

  return (
    <>
      <TableLabels>
        <Name>
          <p>NOME</p>
        </Name>
        <CreatedAt>
          <p>CRIADO EM</p>
        </CreatedAt>
        <Answers>
          <p>RESPOSTAS</p>
        </Answers>
        <Status>
          <p>STATUS</p>
        </Status>
        <Actions>
          <p>AÇÕES</p>
        </Actions>
      </TableLabels>
      {forms.map((form) => listForms(form))}

      <Modal
        isOpen={deleteResearch}
        onRequestClose={() => setDeleteReasearch(false)}
      >
        <ModalContent>
          <div>
            <img src={trash} alt="Deletar" />
            <p>Você deseja apagar esta pesquisa?</p>
          </div>
          <div>
            <GhostButton onClick={() => deleteForm()}>Apagar</GhostButton>
            <SolidButton onClick={() => setDeleteReasearch(false)}>
              Cancelar
            </SolidButton>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Table;
