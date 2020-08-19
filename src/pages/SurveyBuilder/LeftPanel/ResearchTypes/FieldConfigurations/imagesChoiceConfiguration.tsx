import React, { useEffect, useMemo, useCallback } from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import NumberField from '../../../../../components/ResearchFields/NumericField';
import ImageUpload from '../../../../../components/Common/ImageUpload';

import {
  Question,
  ImageChoice,
} from '../../../../../store/ducks/questions/types';
import randomSortArray from '../../../../../utils/randomSortArray';

import { Container } from './styles';

interface ImagesChoiceConfigurationProps {
  handleChange: Function;
  field: Question | undefined;
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
  const randomSort = useMemo(() => field?.randomSort, [field]);
  const imageChoices = useMemo(() => {
    if (field?.imgChoices) {
      return field?.imgChoices;
    }
    return [];
  }, [field]);
  const addOtherOption = useMemo(() => field?.addOtherOption, [field]);

  useEffect(() => {
    if (imageChoices && randomSort) {
      const randomSortedArray = randomSortArray(imageChoices);
      handleChange([randomSortedArray], ['imgChoices']);
    }
  }, [randomSort]);

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
            name="multipleChoice"
            onChange={(event) =>
              handleChange([event.target.checked], ['multipleChoice'])
            }
          />
        </section>
        {field?.multipleChoice && (
          <section>
            <NumberField
              label="Limite de Escolhas"
              name="choiceMaxAmmount"
              id="choiceMaxAmmountField"
              // defaultValue={2}
              onChange={(event) =>
                parseInt(event.target.value, 10) <= 10
                  ? handleChange(
                      [parseInt(event.target.value, 10)],
                      ['choiceMaxAmmount'],
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
            name="randomSort"
            onChange={(event) =>
              handleChange([event.target.checked], ['randomSort'])
            }
          />
        </section>
        <section>
          <ImageUpload
            label="Opções"
            imageOptions={field?.answerOptions || []}
            onChange={(value: any) => handleChange([value], ['imgChoices'])}
          />
        </section>
      </Form>
    </Container>
  );
};

export default ImagesChoiceConfiguration;
