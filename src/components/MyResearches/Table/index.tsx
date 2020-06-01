import React, { useState } from 'react';

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
  const [deleteResearch, setDeleteReasearch] = useState(true);

  const listForms = (form: FormData) => (
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
          <a href="/">
            <img src={edit} alt="Editar" />
            <EditLabel>Editar</EditLabel>
          </a>
          <div />
          <a href="/">
            <img src={trash} alt="Deletar" />
            <DeleteLabel>Deletar</DeleteLabel>
          </a>
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
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // style={customStyles}
        // contentLabel="Example Modal"
      >
        <div>
          <img src={trash} alt="Deletar" />
          <p>Voce deseja apagar esta pesquisa?</p>
        </div>
        <div>
          <a>Apagar</a>
          <a>Apagar</a>
        </div>
      </ModalDelete>
    </>
  );
};

export default Table;
