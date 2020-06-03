import React from 'react';

import { Container, CardColor, DashedContainer, Section } from './styles';

import uploadIcon from '../../../../assets/uploud_icon.png';

const colors = [
  { name: 'Amarelo', value: '#FFA825' },
  { name: 'Vermelho', value: '#EB1D63' },
  { name: 'Bege', value: '#FFCD80' },
  { name: 'Verde', value: '#0F5555' },
  { name: 'Verde Claro', value: '#ADD681' },
  { name: 'Azul', value: '#3FA4F6' },
];

const ResearchStyles: React.FC = () => {
  return (
    <Container>
      <Section>
        <p>Fundo da pesquisa</p>
        <div>
          {colors.map((color) => (
            <CardColor color={color.value} />
          ))}
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
        <p>Texto no header</p>
        <input />
      </Section>
      <Section>
        <p>Logo no header</p>
      </Section>
      <Section>
        <p>Fundo no header</p>
        <div>
          {colors.map((color) => (
            <CardColor color={color.value} />
          ))}
        </div>
      </Section>
      <Section>
        <p>Texto no rodapé</p>
        <input />
      </Section>
      <Section>
        <p>Fundo da pesquisa</p>
        <div>
          {colors.map((color) => (
            <CardColor color={color.value} />
          ))}
        </div>
      </Section>
    </Container>
  );
};

export default ResearchStyles;
