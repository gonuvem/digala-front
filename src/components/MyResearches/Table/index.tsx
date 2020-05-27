import React from 'react';

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
} from './styles';

import { formtDate } from '../../../utils/dates';

import edit from '../../../assets/edit_icon.png';
import trash from '../../../assets/trash_icon.png';

interface TableProps {
  forms: [
    {
      _id: string;
      numResponses: number;
      isActive: boolean;
      createdAt: string;
      config: {
        name: string;
      };
    },
  ];
}

const Table: React.FC<TableProps> = ({ forms }) => {
  const listForms = (form: any) => (
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
    </>
  );
};

export default Table;
