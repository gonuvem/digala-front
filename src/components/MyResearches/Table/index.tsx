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

import edit from '../../../assets/edit_icon.png';
import trash from '../../../assets/trash_icon.png';

const Table: React.FC = () => (
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
    <TableRow>
      <Name>
        <p>Pesquisa eleitoral de Lagoa Alegre</p>
      </Name>
      <CreatedAt>
        <p>22/09/2019</p>
      </CreatedAt>
      <Answers>
        <p>12 envios</p>
      </Answers>
      <Status>
        <ColorStatus isActive={true} />
        <p>Ativa</p>
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
  </>
);

export default Table;
