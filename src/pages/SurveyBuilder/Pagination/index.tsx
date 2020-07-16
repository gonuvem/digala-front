import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { FiBookmark, FiPlusCircle } from 'react-icons/fi';

import SolidButton from '../../../components/Common/SolidButton';
import LoadingSpinner from '../../../components/Common/LoadingSpinner';

import { Container, PanelArea } from './styles';

import { ApplicationState } from '../../../store';
import { Form } from '../../../store/ducks/forms/types';
import { Question } from '../../../store/ducks/questions/types';
import { UPDATE_FORM, CREATE_OWN_FORM } from '../../../services/requests/forms';
import { CREATE_OWN_QUESTIONS } from '../../../services/requests/questions';
import updateOwnFormData from '../../../services/logic/updateOwnFormData';
import createOwnQuestions from '../../../services/logic/createOwnQuestions';

const Pagination: React.FC = () => {
  const [pagesCount, setPagesCount] = useState(1);
  const formData = useSelector<ApplicationState, Form | null>(
    (state) => state.forms.form,
  );

  const questionsData = useSelector<
    ApplicationState,
    [Question[], Form | null]
  >((state) => [state.questions.questions, state.forms.form]);

  const [updateForm, { loading: updateFormLoading }] = useMutation(UPDATE_FORM);
  const [createQuestions, { loading: createQuestionsLoading }] = useMutation(
    CREATE_OWN_QUESTIONS,
  );

  const handleCreatePage = useCallback(
    () => setPagesCount((state) => state + 1),
    [],
  );

  const handleUpdate = useCallback(() => {
    if (formData?.id) {
      createOwnQuestions(createQuestions, questionsData[0], formData?.id);
    }
    // console.log(formData);
    // updateOwnFormData(updateForm, formData);
  }, [formData, updateForm, questionsData]);

  return (
    <Container>
      <SolidButton onClick={handleUpdate}>
        {!updateFormLoading ? (
          'Publicar'
        ) : (
          <div id="loading-container">
            <LoadingSpinner />
          </div>
        )}
      </SolidButton>
      <PanelArea>
        {[...Array(pagesCount)].map((e, i) => (
          <>
            <FiBookmark size={32} />
            <span>{`Página ${i + 1}`}</span>
            <div id="divisor" />
          </>
        ))}
        <FiPlusCircle size={24} onClick={handleCreatePage} />
      </PanelArea>
    </Container>
  );
};

export default Pagination;
