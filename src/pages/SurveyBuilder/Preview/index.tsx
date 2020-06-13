import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { FiPlusCircle, FiSliders } from 'react-icons/fi';
import { useTransition } from 'react-spring';

import QuestionBox from '../../../components/SurveyBuilder/QuestionBox';
import Field from './field';

import { Container, PanelArea, NavLink, QuestionsPanel } from './styles';

import { ApplicationState } from '../../../store';
import { Question } from '../../../store/ducks/questions/types';
import { Form as FormType } from '../../../store/ducks/forms/types';
import addFieldToForm from '../../../services/logic/addFieldToForm';

const Preview: React.FC = () => {
  const [showQuestionsPanel, setShowQuestionsPanel] = useState(false);
  const dispatch = useDispatch();

  const [fieldsRegistered, formData] = useSelector<
    ApplicationState,
    [Question[], FormType | null]
  >((state) => [state.questions.questions, state.forms.form]);

  const transitions = useTransition(showQuestionsPanel, null, {
    from: { opacity: 0, transform: 'translateY(-10vh)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-10vh)' },
  });

  const handleQuestionBoxClick = useCallback(
    (alias: string) => addFieldToForm(dispatch, { alias }),
    [dispatch],
  );

  return (
    <Container>
      <nav>
        <NavLink href="/">Editar</NavLink>
        <NavLink href="/">Compartilhar</NavLink>
        <NavLink href="/">Resultados</NavLink>
      </nav>
      <PanelArea>
        <h1>{formData?.config.name}</h1>
        <Form onSubmit={() => null}>
          {fieldsRegistered.map((field) => (
            <Field fieldId={field.id} config={field} />
          ))}
        </Form>
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
                  onClick={() => handleQuestionBoxClick('shortText')}
                />
              </QuestionsPanel>
            ),
        )}
      </PanelArea>
    </Container>
  );
};

export default Preview;
