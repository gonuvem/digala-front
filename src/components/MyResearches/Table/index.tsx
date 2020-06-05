import React, { useState, useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { DELETE_FORM } from '../../../services/requests/forms';

import SolidButton from '../../Common/SolidButton';
import GhostButton from '../../Common/GhostButton';

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
  ModalDelete,
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

  const deleteForm = useCallback(() => {
    formDelete({ variables: { id: idForm } });
    if (!error) {
      setDeleteReasearch(false);
    }
  }, [error, formDelete, idForm]);

  const showModal = useCallback((id: string) => {
    setIdForm(id);
    setDeleteReasearch(true);
  }, []);

  const listForms = (form: FormData): React.ReactElement => (
    <div key={form._id}>
      <TableRow>
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
        <Actions>
          <button type="button">
            <img src={edit} alt="Editar" />
            <EditLabel>Editar</EditLabel>
          </button>
          <div />
          <button type="button" onClick={() => showModal(form._id)}>
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

      <ModalDelete
        isOpen={deleteResearch}
        onRequestClose={() => setDeleteReasearch(false)}
        closeTimeoutMS={300}
      >
        <div>
          <img src={trash} alt="Deletar" />
          <p>Você deseja apagar esta pesquisa?</p>
        </div>
        <div>
          <GhostButton onClick={() => deleteForm()}>Apagar</GhostButton>
          <SolidButton
            text="Cancelar"
            onClick={() => setDeleteReasearch(false)}
          />
        </div>
      </ModalDelete>
    </>
  );
};

export default Table;
