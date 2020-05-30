import React from 'react';
import { FiPlusCircle, FiSliders } from 'react-icons/fi';

import QuestionBox from '../../../components/Common/QuestionBox';

import { Container, PanelArea, NavLink, QuestionsPanel } from './styles';

const Preview: React.FC = () => (
  <Container>
    <nav>
      <NavLink href="/">Editar</NavLink>
      <NavLink href="/">Compartilhar</NavLink>
      <NavLink href="/">Resultados</NavLink>
    </nav>
    <PanelArea>
      <h1>Pesquisa eleitoral de Lagoa Alegre</h1>
      <button type="button">
        Arraste uma opção ao lado o clique no botão para adicionar uma nova
        pergunta
        <FiPlusCircle size={24} />
      </button>
      <QuestionsPanel>
        <QuestionBox
          icon={FiSliders}
          name="Texto Curto"
          description="Lorem ipsum sit dolor amet"
          image="https://media.giphy.com/media/kcIjlDEBvWb4BZB29g/giphy.gif"
        />
        <QuestionBox
          icon={FiSliders}
          name="Texto Curto"
          description="Lorem ipsum sit dolor amet"
          image="https://media.giphy.com/media/kcIjlDEBvWb4BZB29g/giphy.gif"
        />
        <QuestionBox
          icon={FiSliders}
          name="Texto Curto"
          description="Lorem ipsum sit dolor amet"
          image="https://media.giphy.com/media/kcIjlDEBvWb4BZB29g/giphy.gif"
        />
        <QuestionBox
          icon={FiSliders}
          name="Texto Curto"
          description="Lorem ipsum sit dolor amet"
          image="https://media.giphy.com/media/kcIjlDEBvWb4BZB29g/giphy.gif"
        />
        <QuestionBox
          icon={FiSliders}
          name="Texto Curto"
          description="Lorem ipsum sit dolor amet"
          image="https://media.giphy.com/media/kcIjlDEBvWb4BZB29g/giphy.gif"
        />
        <QuestionBox
          icon={FiSliders}
          name="Texto Curto"
          description="Lorem ipsum sit dolor amet"
          image="https://media.giphy.com/media/kcIjlDEBvWb4BZB29g/giphy.gif"
        />
        <QuestionBox
          icon={FiSliders}
          name="Texto Curto"
          description="Lorem ipsum sit dolor amet"
          image="https://media.giphy.com/media/kcIjlDEBvWb4BZB29g/giphy.gif"
        />
        <QuestionBox
          icon={FiSliders}
          name="Texto Curto"
          description="Lorem ipsum sit dolor amet"
          image="https://media.giphy.com/media/kcIjlDEBvWb4BZB29g/giphy.gif"
        />
        <QuestionBox
          icon={FiSliders}
          name="Texto Curto"
          description="Lorem ipsum sit dolor amet"
          image="https://media.giphy.com/media/kcIjlDEBvWb4BZB29g/giphy.gif"
        />
      </QuestionsPanel>
    </PanelArea>
  </Container>
);

export default Preview;
