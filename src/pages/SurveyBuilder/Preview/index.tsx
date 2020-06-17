import React, { useState } from 'react';
import { FiPlusCircle, FiSliders } from 'react-icons/fi';
import { useTransition } from 'react-spring';

import SliderField from '../../../components/ResearchFields/SliderField';
import QuestionBox from '../../../components/SurveyBuilder/QuestionBox';
// import NpsField from '../../../components/ResearchFields/NpsField';

import { Container, PanelArea, NavLink, QuestionsPanel } from './styles';

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
        <SliderField
          label="Slider"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          minValue={0}
          maxValue={100}
          leftSubtitle={'Muito Ruim'}
          rightSubtitle={'Muito Bom'}
        />
        <button
          type="button"
          onClick={() => setShowQuestionsPanel(!showQuestionsPanel)}
        >
          Arraste uma opção ao lado o clique no botão para adicionar uma nova
          pergunta
          <FiPlusCircle size={24} />
        </button>
        {transitions.map(
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
        )}
      </PanelArea>
    </Container>
  );
};

export default Preview;
