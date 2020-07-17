import React, { useState } from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';

import { Question } from '../../../../../store/ducks/questions/types';

import { Container } from './styles';

interface NpsConfigurationProps {
  handleChange: Function;
  field: Question;
}

const NpsConfiguration: React.FC<NpsConfigurationProps> = ({
  handleChange,
  field,
}) => {
  const [showSubtitles, setShowSubtitles] = useState(
    field.showSubtitles || false,
  );
  return (
    <Container>
      <Form initialData={field} onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="NPS"
            name="label"
            id="npsLabelField"
            onChange={(event) => handleChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="description"
            id="npsDescriptionField"
            onChange={(event) =>
              handleChange([event.target.value], ['description'])
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
            name="showSubtitles"
            onChange={(event) => {
              handleChange([event.target.checked], ['showSubtitles']);
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
                name="leftSubtitle"
                id="npsLeftSubtitleField"
                onChange={(event) =>
                  handleChange([event.target.value], ['leftSubtitle'])
                }
              />
            </section>
            <section>
              <ShortTextField
                label="Legenda ao lado direito "
                placeholder="Muito provável"
                name="rightSubtitle"
                id="npsRightSubtitleField"
                onChange={(event) =>
                  handleChange([event.target.value], ['rightSubtitle'])
                }
              />
            </section>
          </>
        )}
        <section>
          <ToggleSwitch
            label="Começar no zero"
            helpHint="Caso seja ativado o limite inferior será 0"
            name="startZero"
            onChange={(event) =>
              handleChange([event.target.checked], ['startZero'])
            }
          />
        </section>
        <section>
          <NumberField
            label="Escala"
            name="scale"
            id="scaleFieldId"
            measurement="unidades"
            defaultValue={10}
            onChange={(event) =>
              parseInt(event.target.value, 10) <= 10
                ? handleChange([event.target.value], ['scale'])
                : undefined
            }
          />
        </section>
      </Form>
    </Container>
  );
};

export default NpsConfiguration;
