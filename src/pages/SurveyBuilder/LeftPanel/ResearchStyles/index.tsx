import React from 'react';
import { Form } from '@unform/web';
import { FiHelpCircle } from 'react-icons/fi';
import { Container, CardColor, DashedContainer, Section } from './styles';

import SwitchToggle from '../../../../components/Common/ToggleSwitch';
import ShortTextField from '../../../../components/ResearchFields/ShortTextField';
import uploadIcon from '../../../../assets/uploud_icon.png';
import ColorPicker from '../../../../components/Common/ColorPicker';

import { Form as FormType } from '../../../../store/ducks/forms/types';

const colors = [
  { name: 'Amarelo', value: '#FFA825' },
  { name: 'Vermelho', value: '#EB1D63' },
  { name: 'Bege', value: '#FFCD80' },
  { name: 'Verde', value: '#0F5555' },
  { name: 'Verde Claro', value: '#ADD681' },
  { name: 'Azul', value: '#3FA4F6' },
];

interface ResearchStylesProps {
  formData: FormType | null;
}

const ResearchStyles: React.FC<ResearchStylesProps> = ({ formData }) => {
  return (
    <Container>
      <Form initialData={formData?.style} onSubmit={() => null}>
        <Section>
          <p>Fundo da pesquisa</p>
          <div>
            <ColorPicker name="background" colors={colors} />
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
          <ShortTextField label="Texto no header" name="headerText" id="" />
        </Section>
        <Section>
          <div>
            <p>Logo no header</p>
            <FiHelpCircle />
          </div>
          <SwitchToggle name="hasLogoInHeader" />
        </Section>
        <Section>
          <p>Fundo no header</p>
          <div>
            <ColorPicker name="headerBackground" colors={colors} />
          </div>
        </Section>
        <Section>
          <ShortTextField label="Texto no rodapé" name="footerText" id="" />
        </Section>
        <Section>
          <p>Fundo da pesquisa</p>
          <div>
            <ColorPicker name="headerBackground" colors={colors} />
          </div>
        </Section>
      </Form>
    </Container>
  );
};

export default ResearchStyles;
