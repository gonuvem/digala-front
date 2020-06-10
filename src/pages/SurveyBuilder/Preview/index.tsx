import React, { useState } from 'react';
import { FiPlusCircle, FiSliders } from 'react-icons/fi';
import { useTransition } from 'react-spring';

// import QuestionBox from '../../../components/SurveyBuilder/QuestionBox';
import ImageChoices from '../../../components/ResearchFields/ImagesChoice';
// import NpsField from '../../../components/ResearchFields/NpsField';

import { Container, PanelArea, NavLink, QuestionsPanel } from './styles';

const images = [
  {
    img:
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    name: 'Escolha 1',
    id: '1',
  },
  {
    img:
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    name: 'Escolha 2',
    id: '2',
  },
  {
    img:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=840&q=80',
    name: 'Escolha 3',
    id: '3',
  },
  {
    img:
      'https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
    name: 'Escolha 4',
    id: '4',
  },
  {
    img:
      'https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    name: 'Escolha 5',
    id: '5',
  },
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
        <ImageChoices
          id="image-choices"
          label="Escolha entre imagens"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          choices={images}
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
