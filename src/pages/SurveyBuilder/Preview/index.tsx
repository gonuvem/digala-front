import React, { useState } from 'react';
import { FiPlusCircle, FiSliders } from 'react-icons/fi';
import { useTransition } from 'react-spring';
import { uuid } from 'uuidv4';

import QuestionBox from '../../../components/SurveyBuilder/QuestionBox';
import NpsField from '../../../components/ResearchFields/NpsField';
import SortAnswers from '../../../components/ResearchFields/SortAnswers';

import { Container, PanelArea, NavLink, QuestionsPanel } from './styles';

const listOptions = [
  { id: uuid(), content: 'Opção 01' },
  { id: uuid(), content: 'Opção 02' },
  { id: uuid(), content: 'Opção 03' },
  { id: uuid(), content: 'Opção 04' },
  { id: uuid(), content: 'Opção 05' },
];

const Preview: React.FC = () => {
  const [showQuestionsPanel, setShowQuestionsPanel] = useState(false);
  const transitions = useTransition(showQuestionsPanel, null, {
    from: { opacity: 0, transform: 'translateY(-10vh)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-10vh)' },
  });

  return (
    <Container>
      <nav>
        <NavLink href="/">Editar</NavLink>
        <NavLink href="/">Compartilhar</NavLink>
        <NavLink href="/">Resultados</NavLink>
      </nav>
      <PanelArea>
        <h1>Pesquisa eleitoral de Lagoa Alegre</h1>
        {/* <NpsField
          name={'Nps'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          }
          showSubtitles={true}
          rightSubtitle={'Pouco provável'}
          leftSubtitle={'Muito provável'}
          startNumber={1}
          endNumber={10}
        /> */}
        <SortAnswers
          label="Ordenar Respostas"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          listOptions={listOptions}
        />
        <button
          type="button"
          onClick={() => setShowQuestionsPanel(!showQuestionsPanel)}
        >
          Arraste uma opção ao lado o clique no botão para adicionar uma nova
          pergunta
          <FiPlusCircle size={24} />
        </button>
        {/* {transitions.map(
          ({ item, key, props }) =>
            item && (
              <QuestionsPanel show={showQuestionsPanel} key={key} style={props}>
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
            ),
        )} */}
      </PanelArea>
    </Container>
  );
};

export default Preview;
