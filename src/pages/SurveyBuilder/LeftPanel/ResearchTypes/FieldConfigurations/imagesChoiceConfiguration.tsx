import React, { useEffect, useMemo, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';
import ImageUpload from '../../../../../components/Common/ImageUpload';

import { Question } from '../../../../../store/ducks/questions/types';
import { useDebouncedCallback } from '../../../../../hooks/useDebouncedCallback';

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

  const onChange = useDebouncedCallback(
    (value: any[], properties: string[]) => {
      handleChange(value, properties);
    },
    500,
  );

  const handleLimitChoicesChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const parsedNumber = parseInt(event.target.value, 10);

      if (parsedNumber > 0) {
        handleChange([parseInt(event.target.value, 10)], ['maxChoices']);
      }
    },
    [handleChange],
  );

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
            onChange={(event) => onChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descri????o"
            placeholder="Coloque aqui sua descri????o"
            name="description"
            id="imagesChoiceDescriptionField"
            onChange={(event) =>
              onChange([event.target.value], ['description'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigat??rio"
            helpHint="Caso o usu??rio seja obrigado a responder"
            name="isRequired"
            onChange={(event) =>
              handleChange([event.target.checked], ['isRequired'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Escolha M??ltipla"
            helpHint="Caso o usu??rio possa escolhar mais de uma op????o"
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
              onChange={handleLimitChoicesChange}
            />
          </section>
        )}
        <section>
          <ToggleSwitch
            label="Adicionar op????o outros(a)"
            helpHint="Adicionar uma op????o gen??rica outros"
            name="addOtherOption"
            onChange={(event) => {
              addDefaultOption(event.target.checked);
            }}
          />
        </section>
        <section>
          <ToggleSwitch
            label="Ordem aleat??ria para as op????es?"
            helpHint="As op????es ser??o embaralhadas em cada exibi????o"
            name="hasRandomResponsesOrder"
            onChange={(event) =>
              handleChange([event.target.checked], ['hasRandomResponsesOrder'])
            }
          />
        </section>
        <section>
          <ImageUpload
            label="Op????es"
            imageOptions={field?.answerOptions || []}
            onChange={(value: any) => onChange([value], ['answerOptions'])}
          />
        </section>
      </Form>
    </Container>
  );
};

export default ImagesChoiceConfiguration;
