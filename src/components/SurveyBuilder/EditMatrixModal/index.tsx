import React, { useState, useCallback, useRef, useMemo } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaPlusCircle } from 'react-icons/fa';

import SolidButton from 'components/Common/SolidButton';
import ShortTextField from '../../ResearchFields/ShortTextField';

import { ContainerModal, Line, AddButton, FakeCheckbox } from './styles';

interface EditMatrixModalProps {
  isOpen: boolean;
  onClose: Function;
  handleChange: Function;
  columns: string[];
  lines: string[];
}

const EditMatrixModal: React.FC<EditMatrixModalProps> = ({
  isOpen,
  onClose,
  columns,
  handleChange,
  lines,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [localLines, setLocalLines] = useState<string[]>(lines);
  const [localColumns, setLocalColumns] = useState<string[]>(columns);

  const handleAddLine = useCallback(() => {
    setLocalLines((state) => [...state, '']);
  }, []);

  const handleAddColumn = useCallback(() => {
    setLocalColumns((state) => [...state, '']);
  }, []);

  const handleUpdateMatrix = useCallback(
    (data: any) => {
      const fieldsNames = Object.keys(data);

      const lineFieldsNames = fieldsNames.filter((fieldName) =>
        fieldName.includes('line'),
      );
      const columnFieldsNames = fieldsNames.filter((fieldName) =>
        fieldName.includes('col'),
      );

      const newLines = lineFieldsNames.map((line) => data[line]);
      const newColumns = columnFieldsNames.map((col) => data[col]);

      handleChange([newLines, newColumns], ['lines', 'columns']);
      onClose();
    },
    [handleChange],
  );

  const initialData = useMemo(() => {
    const formData: any = {};
    lines.forEach((line, index) => {
      formData[`line-${index}`] = line;
    });
    columns.forEach((column, index) => {
      formData[`col-${index}`] = column;
    });
    return formData;
  }, [lines, columns]);

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
        <SolidButton onClick={() => formRef.current?.submitForm()}>
          Confirmar
        </SolidButton>
      </div>
      <Form
        initialData={initialData}
        ref={formRef}
        onSubmit={handleUpdateMatrix}
      >
        <Line>
          <ShortTextField
            name="fake-header"
            id="fake-line"
            style={{ visibility: 'hidden' }}
          />
          {localColumns.map((column, index) => (
            <ShortTextField name={`col-${index}`} id={`col-id-${index}`} />
          ))}
          <AddButton type="button" onClick={handleAddColumn}>
            <FaPlusCircle />
          </AddButton>
        </Line>
        {localLines.map((line, index) => (
          <Line>
            <ShortTextField name={`line-${index}`} id={`line-id-${index}`} />
            {localColumns.map((column) => (
              <FakeCheckbox />
            ))}
            <span />
          </Line>
        ))}
        <Line id="last-line">
          <AddButton type="button" onClick={handleAddLine}>
            <FaPlusCircle />
          </AddButton>
        </Line>
      </Form>
    </ContainerModal>
  );
};

export default EditMatrixModal;
