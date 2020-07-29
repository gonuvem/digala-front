import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiHelpCircle } from 'react-icons/fi';
import { Container, DashedContainer, Section } from './styles';

import SwitchToggle from '../../../../components/Common/ToggleSwitch';
import ShortTextField from '../../../../components/ResearchFields/ShortTextField';
import uploadIcon from '../../../../assets/uploud_icon.png';
import ColorPicker from '../../../../components/Common/ColorPicker';

import { Form as FormType } from '../../../../store/ducks/forms/types';
import changeFormConfiguration from '../../../../services/logic/changeFormConfiguration';
import useDebounce from '../../../../hooks/useDebounce';

const colors = [
  '#FFA825',
  '#EB1D63',
  '#FFCD80',
  '#0F5555',
  '#ADD681',
  '#3FA4F6',
];

interface ResearchStylesProps {
  formData: FormType | null;
}

interface FormStyleDTO {
  background?: string;
  logo?: string;
  headerText?: string;
  hasLogoInHeader: boolean;
  headerBackground?: string;
  footerText?: string;
  footerBackground?: string;
}

const ResearchStyles: React.FC<ResearchStylesProps> = ({ formData }) => {
  const [tempInformation, setTempInformation] = useState('');
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();

  const debouncedTrigger = useDebounce(tempInformation, 500);

  const handleChange = useCallback((value) => {
    setTempInformation(value);
  }, []);

  // {
  console.log(formData?.style);
  // }

  useEffect(() => {
    const data = formRef.current?.getData();
    // console.log(data);
    changeFormConfiguration(dispatch, {
      attribute: 'style',
      style: data as FormStyleDTO,
    });
  }, [debouncedTrigger, dispatch]);

  return (
    <Container>
      <Form ref={formRef} initialData={formData?.style} onSubmit={() => null}>
        <Section>
          <p>Fundo da pesquisa</p>
          <div>
            <ColorPicker
              name="background"
              colors={colors}
              onChange={handleChange}
              defaultVal={formData?.style?.background}
            />
          </div>
        </Section>
        <Section>
          <p>Logo</p>
          <DashedContainer>
            <img src={uploadIcon} alt="Upload Logo" />
            <p>Coloque sua marca aqui</p>
          </DashedContainer>
        </Section>
        <Section>
          <ShortTextField
            label="Texto no header"
            name="headerText"
            id="headerTextField"
            onChange={(event) => handleChange(event.target.value)}
          />
        </Section>
        <Section>
          <SwitchToggle
            name="hasLogoInHeader"
            label="Logo no header"
            helpHint="Lorem ipsum sit dolor amet"
            onChange={(event) => handleChange(event.target.checked)}
          />
        </Section>
        <Section>
          <p>Fundo no header</p>
          <div>
            <ColorPicker
              name="headerBackground"
              colors={colors}
              onChange={handleChange}
              defaultVal={formData?.style?.headerBackground}
            />
          </div>
        </Section>
        <Section>
          <ShortTextField
            label="Texto no rodapé"
            name="footerText"
            id="footerTextField"
            onChange={(event) => handleChange(event.target.value)}
          />
        </Section>
        <Section>
          <p>Fundo da pesquisa</p>
          <div>
            <ColorPicker
              name="footerBackground"
              colors={colors}
              onChange={handleChange}
              defaultVal={formData?.style?.footerBackground}
            />
          </div>
        </Section>
      </Form>
    </Container>
  );
};

export default ResearchStyles;
