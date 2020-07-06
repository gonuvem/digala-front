import React, { useState, useCallback } from 'react';
import { Form } from '@unform/web';
import { FaPlusCircle } from 'react-icons/fa';

import SolidButton from 'components/Common/SolidButton';
import ShortTextField from '../../ResearchFields/ShortTextField';

import { ContainerModal, Line, AddButton, FakeCheckbox } from './styles';

interface EditMatrixModalProps {
  isOpen: boolean;
  onClose: Function;
  columns: string[];
  lines: string[];
}

const EditMatrixModal: React.FC<EditMatrixModalProps> = ({
  isOpen,
  onClose,
  columns,
  lines,
}) => {
  const [localLines, setLocalLines] = useState<string[]>(lines);
  const [localColumns, setLocalColumns] = useState<string[]>(columns);

  const handleAddLine = useCallback(() => {
    setLocalLines((state) => [...state, '']);
  }, []);

  const handleAddColumn = useCallback(() => {
    setLocalColumns((state) => [...state, '']);
  }, []);

  return (
    <ContainerModal
      columnCount={localColumns.length}
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      closeTimeoutMS={300}
    >
      <div>
        <div>
          <h3>Editar matriz de escolhas</h3>
          <p>Realize abaixo as modificações desejadas na matriz de escolha</p>
        </div>
        <SolidButton onClick={() => onClose()}>Confirmar</SolidButton>
      </div>
      <Form onSubmit={() => null}>
        <Line>
          <ShortTextField
            name="fake-header"
            id="fake-line"
            style={{ visibility: 'hidden' }}
          />
          {localColumns.map((column) => (
            <ShortTextField name="linha 01" id="linha01" />
          ))}
          <AddButton onClick={handleAddColumn}>
            <FaPlusCircle />
          </AddButton>
        </Line>
        {localLines.map((line) => (
          <Line>
            <ShortTextField name="linha 01" id="linha01" />
            {localColumns.map((column) => (
              <FakeCheckbox />
            ))}
            <span />
          </Line>
        ))}
        <Line id="last-line">
          <AddButton onClick={handleAddLine}>
            <FaPlusCircle />
          </AddButton>
        </Line>
      </Form>
    </ContainerModal>
  );
};

export default EditMatrixModal;
