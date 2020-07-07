import React, { useState } from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import SolidButton from '../../../../../components/Common/SolidButton';
import EditMatrixModal from '../../../../../components/SurveyBuilder/EditMatrixModal';

import { Question } from '../../../../../store/ducks/questions/types';

import { Container, SectionTitle } from './styles';

interface MatrixConfigurationProps {
  handleChange: Function;
  field: Question | undefined;
}

const MatrixConfiguration: React.FC<MatrixConfigurationProps> = ({
  handleChange,
  field,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <Container>
        <Form onSubmit={() => null}>
          <section>
            <ShortTextField
              label="Nome"
              placeholder="matrix"
              name="matrixLabel"
              id="matrixLabelField"
              onChange={(event) =>
                handleChange([event.target.value], ['label'])}
            />
          </section>
          <section>
            <TextAreaField
              label="Descrição"
              placeholder="Coloque aqui sua descrição"
              name="matrixDescripion"
              id="matrixDescriptionField"
              onChange={(event) =>
                handleChange([event.target.value], ['description'])}
            />
          </section>
          <section>
            <ToggleSwitch
              label="Obrigatório"
              helpHint="Caso o usuário seja obrigado a responder"
              name="matrixRequired"
              onChange={(event) =>
                handleChange([event.target.checked], ['required'])
              }
            />
          </section>
          <section>
            <ToggleSwitch
              label="Escolha Múltipla por linha"
              helpHint="Caso o usuário possa escolher mais de uma opção por linha"
              name="matrixMultipleChoice"
              onChange={(event) =>
                handleChange([event.target.checked], ['multipleChoice'])
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
        columns={field?.columns || []}
        lines={field?.lines || []}
      />
    </>
  );
};

export default MatrixConfiguration;
