import React, { useState, useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import SolidButton from '../../../../../components/Common/SolidButton';
import EditMatrixModal from '../../../../../components/SurveyBuilder/EditMatrixModal';

import { Question } from '../../../../../store/ducks/questions/types';
import { useDebouncedCallback } from '../../../../../hooks/useDebouncedCallback';

import { Container, SectionTitle } from './styles';

interface MatrixConfigurationProps {
  handleChange: Function;
  field: Question;
}

const MatrixConfiguration: React.FC<MatrixConfigurationProps> = ({
  handleChange,
  field,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    formRef.current?.setData(field);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field?.id]);

  const onChange = useDebouncedCallback(
    (value: any[], properties: string[]) => {
      handleChange(value, properties);
    },
    500,
  );

  return (
    <>
      <Container>
        <Form ref={formRef} onSubmit={() => null}>
          <section>
            <ShortTextField
              label="Nome"
              placeholder="matrix"
              name="label"
              id="matrixLabelField"
              onChange={(event) => onChange([event.target.value], ['label'])}
            />
          </section>
          <section>
            <TextAreaField
              label="Descrição"
              placeholder="Coloque aqui sua descrição"
              name="description"
              id="matrixDescriptionField"
              onChange={(event) =>
                onChange([event.target.value], ['description'])
              }
            />
          </section>
          <section>
            <ToggleSwitch
              label="Obrigatório"
              helpHint="Caso o usuário seja obrigado a responder"
              name="isRequired"
              onChange={(event) =>
                handleChange([event.target.checked], ['isRequired'])
              }
            />
          </section>
          <section>
            <ToggleSwitch
              label="Escolha Múltipla por linha"
              helpHint="Caso o usuário possa escolher mais de uma opção por linha"
              name="isMultipleChoice"
              onChange={(event) =>
                handleChange([event.target.checked], ['isMultipleChoice'])
              }
            />
          </section>
          <section>
            <SectionTitle>Opções</SectionTitle>
            <SolidButton onClick={() => setIsEditModalOpen(true)}>
              Editar Tabela
            </SolidButton>
          </section>
        </Form>
      </Container>
      <EditMatrixModal
        isOpen={isEditModalOpen}
        handleChange={handleChange}
        onClose={() => setIsEditModalOpen(false)}
        columns={field?.colsLabels || []}
        lines={field?.rowsLabels || []}
      />
    </>
  );
};

export default MatrixConfiguration;
