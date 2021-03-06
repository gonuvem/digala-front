import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Container, Section } from './styles';

import SwitchToggle from '../../../../components/Common/ToggleSwitch';
import ShortTextField from '../../../../components/ResearchFields/ShortTextField';
import ColorPicker from '../../../../components/Common/ColorPicker';
import LogoUpload from '../../../../components/Common/LogoUpload';

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
  const [hasLogoInHeader, setHasLogoInHeader] = useState(
    formData?.style.hasLogoInHeader || false,
  );
  const [defaultLogo] = useState<string>(() =>
    formData?.style?.logo ? formData.style.logo : '',
  );
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();

  const debouncedTrigger = useDebounce(tempInformation, 500);

  const handleChange = useCallback((value) => {
    setTempInformation(value);
  }, []);

  useEffect(() => {
    const data = formRef.current?.getData() as FormStyleDTO;
    const dataUrl = {
      ...data,
      logo: data && data.logo ? data.logo : '',
    };
    changeFormConfiguration(dispatch, {
      attribute: 'style',
      style: dataUrl as FormStyleDTO,
    });
  }, [debouncedTrigger, dispatch]);

  const handleUploadLogo = useCallback(
    (image: string) => {
      const data = formRef.current?.getData();
      const dataUrl = {
        ...data,
        logo: image,
      };
      changeFormConfiguration(dispatch, {
        attribute: 'style',
        style: dataUrl as FormStyleDTO,
      });
    },
    [dispatch],
  );

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
          <SwitchToggle
            name="hasLogoInHeader"
            label="Logo no cabe??alho?"
            helpHint="Lorem ipsum sit dolor amet"
            onChange={(event) => {
              handleChange(event.target.checked);
              setHasLogoInHeader(event.target.checked);
            }}
          />
        </Section>
        {hasLogoInHeader && (
          <Section>
            <LogoUpload
              name="logo"
              label="Logo"
              onChange={(value: string) => {
                handleUploadLogo(value);
              }}
              logo={formData?.style?.logo || defaultLogo}
            />
          </Section>
        )}
        <Section>
          <ShortTextField
            label="Texto do cabe??alho"
            name="headerText"
            id="headerTextField"
            onChange={(event) => handleChange(event.target.value)}
          />
        </Section>
        <Section>
          <p>Fundo do cabe??alho</p>
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
            label="Texto no rodap??"
            name="footerText"
            id="footerTextField"
            onChange={(event) => handleChange(event.target.value)}
          />
        </Section>
        <Section>
          <p>Fundo do rodap??</p>
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
