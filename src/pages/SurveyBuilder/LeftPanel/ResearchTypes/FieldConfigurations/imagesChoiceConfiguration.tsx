import React, { useEffect, useMemo } from 'react';
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

const ImagesChoiceConfiguration: React.FC<ImagesChoiceConfigurationProps> = ({
  handleChange,
  field,
}) => {
  const randomSort = useMemo(() => field?.randomSort, [field]);
  const imageChoices = useMemo(() => {
    if (field?.imgChoices) {
      return field.imgChoices;
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

  useEffect(() => {
    if (addOtherOption) {
      const otherOption: ImageChoice = {
        label: '',
        loading: false,
        image:
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        id: 'other-option',
      };
      handleChange([[...imageChoices, otherOption]], ['imgChoices']);
    } else {
      const removedOtherOptionImageChoices = imageChoices.filter(
        (imageChoice) => imageChoice.id !== 'other-option',
      );
      handleChange([removedOtherOptionImageChoices], ['imgChoices']);
    }
  }, [addOtherOption]);

  return (
    <Container>
      <Form onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Escolha de imagens"
            name="imagesChoiceLabel"
            id="imagesChoiceLabelField"
            onChange={(event) => handleChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição"
            name="imagesChoiceDescripion"
            id="imagesChoiceDescriptionField"
            onChange={(event) =>
              handleChange([event.target.value], ['description'])}
          />
        </section>
        <section>
          <ToggleSwitch
            label="Obrigatório"
            helpHint="Caso o usuário seja obrigado a responder"
            name="imagesChoiceRequired"
            onChange={(event) =>
              handleChange([event.target.checked], ['required'])}
          />
        </section>
        <section>
          <ToggleSwitch
            label="Escolha Múltipla"
            helpHint="Caso o usuário possa escolhar mais de uma opção"
            name="imagesChoiceMultiple"
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
                  : undefined}
            />
          </section>
        )}
        <section>
          <ToggleSwitch
            label="Adicionar opção outros(a)"
            helpHint="Adicionar uma opção genérica outros"
            name="addOtherOption"
            onChange={(event) =>
              handleChange([event.target.checked], ['addOtherOption'])
            }
          />
        </section>
        <section>
          <ToggleSwitch
            label="Ordem das respostas aleatória"
            helpHint="Toda vez que será gerado uma ordem aleatória para as opções"
            name="randomOrder"
            onChange={(event) =>
              handleChange([event.target.checked], ['randomSort'])
            }
          />
        </section>
        <section>
          <ImageUpload
            label="Opções"
            imageOptions={field?.imgChoices || []}
            onChange={(value: any) => handleChange([value], ['imgChoices'])}
          />
        </section>
      </Form>
    </Container>
  );
};

export default ImagesChoiceConfiguration;
