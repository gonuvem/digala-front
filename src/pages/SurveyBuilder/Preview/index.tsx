import React, { useState, useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { useParams } from 'react-router-dom';
import { useTransition } from 'react-spring';
import { FiPlusCircle, FiSliders } from 'react-icons/fi';

import QuestionBox from '../../../components/SurveyBuilder/QuestionBox';
import FieldWrapper from '../../../components/SurveyBuilder/FieldWrapper';
import Modal from '../../../components/Common/Modal';
import SolidButton from '../../../components/Common/SolidButton';
import LoadingSpinner from '../../../components/Common/LoadingSpinner';

import {
  Container,
  PanelArea,
  NavLink,
  QuestionsPanel,
  ModalContent,
  HeaderContainer,
  PreviewLink,
} from './styles';

import { ApplicationState } from '../../../store';
import { Question } from '../../../store/ducks/questions/types';
import { Form as FormType } from '../../../store/ducks/forms/types';
import addFieldToForm from '../../../services/logic/addFieldToForm';
import focusQuestion from '../../../services/logic/focusQuestion';
import changeFieldPosition from '../../../services/logic/changeFieldPosition';
import deleteQuestion from '../../../services/logic/deleteQuestion';
import { DELETE_OWN_QUESTION } from '../../../services/requests/questions';

import trash from '../../../assets/trash_icon.png';

interface QuestionDTO {
  name: string;
  cover: string;
  alias: string;
  description: string;
}

interface PreviewProps {
  questionsTypes: QuestionDTO[];
  leftPanelRef: any;
  paginationRef: any;
}

interface IParams {
  id: string;
}

const Preview: React.FC<PreviewProps> = ({
  questionsTypes,
  leftPanelRef,
  paginationRef,
}) => {
  const [showQuestionsPanel, setShowQuestionsPanel] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteQuestionLoading, setDeleteQuestionLoading] = useState(false);
  const { id } = useParams<IParams>();
  const dispatch = useDispatch();

  const [fieldsRegistered, formData, focusedQuestion] = useSelector<
    ApplicationState,
    [Question[], FormType | null, string | null]
  >((state) => [
    state.questions.questions,
    state.forms.form,
    state.questions.focusedQuestion,
  ]);

  const [deleteOwnQuestion] = useMutation(DELETE_OWN_QUESTION);

  const transitions = useTransition(showQuestionsPanel, {
    from: { opacity: 0, transform: 'translateY(-10vh)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-10vh)' },
  });

  const handleQuestionBoxClick = useCallback(
    (alias: string) => {
      addFieldToForm(dispatch, alias, fieldsRegistered.length);
      setShowQuestionsPanel(false);
    },
    [dispatch, fieldsRegistered.length],
  );

  const handleFocusQuestion = useCallback(
    (questionId: string) => {
      focusQuestion(dispatch, { questionId });
    },
    [dispatch],
  );

  const handleChangePosition = useCallback(
    (direction: 'up' | 'down', fieldIndex: number) => {
      changeFieldPosition(dispatch, {
        fieldIndex,
        questions: fieldsRegistered,
        direction,
      });
    },
    [dispatch, fieldsRegistered],
  );

  const handleDeleteQuestion = useCallback(async () => {
    setDeleteQuestionLoading(true);
    await deleteQuestion(dispatch, deleteOwnQuestion, {
      fieldId: focusedQuestion,
      questions: fieldsRegistered,
    });
    setIsDeleteModalOpen(false);
    setDeleteQuestionLoading(false);
  }, [deleteOwnQuestion, dispatch, fieldsRegistered, focusedQuestion]);

  const toggleModal = useCallback(() => {
    setIsDeleteModalOpen((state) => !state);
  }, []);

  return (
    <Container data-outside="outside">
      <HeaderContainer data-outside="outside">
        <nav>
          <NavLink isActive href="#">
            Editar
          </NavLink>
          <NavLink href={`/share/${id}`}>Compartilhar</NavLink>
          <NavLink href={`/survey_results/${id}`}>Resultados</NavLink>
        </nav>
        <PreviewLink href={`/survey/${id}`} target="_blank">
          Pré-visualizar
        </PreviewLink>
      </HeaderContainer>
      <PanelArea data-outside="outside">
        <h1 data-outside="outside">{formData?.config.name}</h1>
        <p>{formData?.config.description}</p>
        <Form onSubmit={() => null}>
          {fieldsRegistered.map((field, fieldIndex) => (
            <FieldWrapper
              field={field}
              fieldIndex={fieldIndex}
              isSelected={field.id === focusedQuestion}
              handleFocusQuestion={handleFocusQuestion}
              handleChangePosition={handleChangePosition}
              toggleModal={toggleModal}
              leftPanelRef={leftPanelRef}
              paginationRef={paginationRef}
            />
          ))}
        </Form>
        <button
          type="button"
          onClick={() => setShowQuestionsPanel(!showQuestionsPanel)}
        >
          Clique no botão para adicionar uma nova pergunta
          <FiPlusCircle size={24} />
        </button>
        {transitions(
          (props, item) =>
            item && (
              <QuestionsPanel style={props}>
                {questionsTypes.map((question) => (
                  <QuestionBox
                    key={question.alias}
                    icon={FiSliders}
                    name={question.name}
                    description={question.description}
                    image={question.description}
                    onClick={() => handleQuestionBoxClick(question.alias)}
                  />
                ))}
              </QuestionsPanel>
            ),
        )}
      </PanelArea>
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
      >
        <ModalContent>
          <div>
            <img src={trash} alt="Deletar" />
            <p>Você deseja remover esta questão?</p>
          </div>
          <div>
            {deleteQuestionLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <SolidButton
                  colorScheme="danger"
                  onClick={handleDeleteQuestion}
                >
                  Apagar
                </SolidButton>
                <SolidButton
                  colorScheme="disabled"
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  Cancelar
                </SolidButton>
              </>
            )}
          </div>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Preview;
