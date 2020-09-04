import React, { useEffect, useMemo, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';
import ImageUpload from '../../../../../components/Common/ImageUpload';

import { Question } from '../../../../../store/ducks/questions/types';

import { Container } from './styles';

interface ImagesChoiceConfigurationProps {
  handleChange: Function;
  field: Question;
}

interface ListOptionsProps {
  _id: string;
  text: string;
  value?: string;
  label?: string;
  image?: string;
  loading?: boolean;
}

const ImagesChoiceConfiguration: React.FC<ImagesChoiceConfigurationProps> = ({
  handleChange,
  field,
}) => {
  const formRef = useRef<FormHandles>(null);

  const imageChoices = useMemo(() => {
    if (field?.imgChoices) {
      return field?.imgChoices;
    }
    return [];
  }, [field]);

  const addDefaultOption = useCallback(
    (toggleOtherOption) => {
      if (toggleOtherOption) {
        const otherOption: ListOptionsProps = {
          text: '',
          loading: false,
          image:
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          _id: 'other-option',
        };
        handleChange(
          [[...imageChoices, otherOption], toggleOtherOption],
          ['imgChoices', 'addOtherOption'],
        );
      } else {
        const removedOtherOptionImageChoices = imageChoices.filter(
          (imageChoice) => imageChoice._id !== 'other-option',
        );
        handleChange([removedOtherOptionImageChoices], ['imgChoices']);
      }
    },
    [imageChoices, handleChange],
  );

  useEffect(() => {
    formRef.current?.setData(field);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.id]);

  return (
    <Container>
      <Form initialData={field} onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Escolha de imagens"
            name="label"
            id="imagesChoiceLabelField"
            onChange={(event) => handleChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="description"
            id="imagesChoiceDescriptionField"
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
            label="Escolha Múltipla"
            helpHint="Caso o usuário possa escolhar mais de uma opção"
            name="isMultipleChoice"
            onChange={(event) =>
              handleChange([event.target.checked], ['isMultipleChoice'])
            }
          />
        </section>
        {field?.isMultipleChoice && (
          <section>
            <NumberField
              label="Limite de Escolhas"
              name="maxChoices"
              id="choiceMaxAmmountField"
              // defaultValue={2}
              onChange={(event) =>
                parseInt(event.target.value, 10) <= 10
                  ? handleChange(
                      [parseInt(event.target.value, 10)],
                      ['maxChoices'],
                    )
                  : undefined
              }
            />
          </section>
        )}
        <section>
          <ToggleSwitch
            label="Adicionar opção outros(a)"
            helpHint="Adicionar uma opção genérica outros"
            name="addOtherOption"
            onChange={(event) => {
              addDefaultOption(event.target.checked);
            }}
          />
        </section>
        <section>
          <ToggleSwitch
            label="Ordem das respostas aleatória"
            helpHint="Toda vez que será gerado uma ordem aleatória para as opções"
            name="hasRandomResponsesOrder"
            onChange={(event) =>
              handleChange([event.target.checked], ['hasRandomResponsesOrder'])
            }
          />
        </section>
        <section>
          <ImageUpload
            label="Opções"
            imageOptions={field?.answerOptions || []}
            onChange={(value: any) => handleChange([value], ['answerOptions'])}
          />
        </section>
      </Form>
    </Container>
  );
};

export default ImagesChoiceConfiguration;
