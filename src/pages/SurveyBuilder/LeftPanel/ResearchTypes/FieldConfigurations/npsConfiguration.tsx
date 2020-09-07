import React, { useState, useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';

import { Question } from '../../../../../store/ducks/questions/types';
import { useDebouncedCallback } from '../../../../../hooks/useDebouncedCallback';

import { Container } from './styles';

interface NpsConfigurationProps {
  handleChange: Function;
  field: Question;
}

const NpsConfiguration: React.FC<NpsConfigurationProps> = ({
  handleChange,
  field,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [showSubtitles, setShowSubtitles] = useState(
    field.canDisplayLabels || false,
  );

  useEffect(() => {
    formRef.current?.setData(field);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.id]);

  const onChange = useDebouncedCallback(
    (value: any[], properties: string[]) => {
      handleChange(value, properties);
    },
    500,
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="NPS"
            name="label"
            id="npsLabelField"
            onChange={(event) => onChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="description"
            id="npsDescriptionField"
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
            label="Mostrar Legendas"
            helpHint="Exibir legendas em cada extremidade"
            name="canDisplayLabels"
            onChange={(event) => {
              handleChange([event.target.checked], ['canDisplayLabels']);
              setShowSubtitles(event.target.checked);
            }}
          />
        </section>
        {showSubtitles && (
          <>
            <section>
              <ShortTextField
                label="Legenda ao lado esquerdo"
                placeholder="Pouco provável"
                name="leftLabel"
                id="npsLeftSubtitleField"
                onChange={(event) =>
                  onChange([event.target.value], ['leftLabel'])
                }
              />
            </section>
            <section>
              <ShortTextField
                label="Legenda ao lado direito "
                placeholder="Muito provável"
                name="rightLabel"
                id="npsRightSubtitleField"
                onChange={(event) =>
                  onChange([event.target.value], ['rightLabel'])
                }
              />
            </section>
          </>
        )}
        <section>
          <ToggleSwitch
            label="Começar no zero"
            helpHint="Caso seja ativado o limite inferior será 0"
            name="canStartAtZero"
            onChange={(event) =>
              handleChange([event.target.checked], ['canStartAtZero'])
            }
          />
        </section>
        <section>
          <NumberField
            label="Escala"
            name="escale"
            id="scaleFieldId"
            measurement="unidades"
            maxValue={10}
            defaultValue={field?.escale ? field.escale : 10}
            onChange={(event) =>
              parseInt(event.target.value, 10) <= 10
                ? handleChange([event.target.value], ['escale'])
                : undefined
            }
          />
        </section>
      </Form>
    </Container>
  );
};

export default NpsConfiguration;
