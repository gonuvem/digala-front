import React, { useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { isUuid } from 'uuidv4';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { FiBookmark, FiPlusCircle } from 'react-icons/fi';

import SolidButton from '../../../components/Common/SolidButton';
import LoadingSpinner from '../../../components/Common/LoadingSpinner';

import { Container, PanelArea } from './styles';

import { ApplicationState } from '../../../store';
import { Form } from '../../../store/ducks/forms/types';
import { Question } from '../../../store/ducks/questions/types';
import { UPDATE_FORM } from '../../../services/requests/forms';
import {
  CREATE_OWN_QUESTIONS,
  LIST_QUESTION_TYPES,
} from '../../../services/requests/questions';
import updateOwnFormData from '../../../services/logic/updateOwnFormData';
import createOwnQuestions from '../../../services/logic/createOwnQuestions';

const Pagination: React.FC = () => {
  const [pagesCount, setPagesCount] = useState(1);

  const [questionsData, formData] = useSelector<
    ApplicationState,
    [Question[], Form | null]
  >((state) => [state.questions.questions, state.forms.form]);

  const [updateForm, { loading: updateFormLoading }] = useMutation(UPDATE_FORM);
  const [createQuestions, { loading: createQuestionsLoading }] = useMutation(
    CREATE_OWN_QUESTIONS,
  );

  const { data: questionsTypesData } = useQuery(LIST_QUESTION_TYPES, {
    variables: { perPage: 20 },
  });

  const questionTypes = useMemo(
    () =>
      questionsTypesData?.data?.error === null
        ? questionsTypesData?.data?.types
        : [],
    [questionsTypesData],
  );

  const handleCreatePage = useCallback(
    () => setPagesCount((state) => state + 1),
    [],
  );

  const handleUpdate = useCallback(() => {
    if (formData?.id && questionTypes) {
      const questionsToCreate = questionsData.filter((question) =>
        isUuid(question.id),
      );

      createOwnQuestions(
        createQuestions,
        questionsToCreate,
        formData?.id,
        questionTypes,
      );
    }
    updateOwnFormData(updateForm, formData);
  }, [formData, updateForm, questionsData, questionTypes, createQuestions]);

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
          // eslint-disable-next-line react/no-array-index-key
          <div key={`page-${i}`}>
            <FiBookmark size={32} />
            <span>{`Página ${i + 1}`}</span>
            <div id="divisor" />
          </div>
        ))}
        <FiPlusCircle size={24} onClick={handleCreatePage} />
      </PanelArea>
    </Container>
  );
};

export default Pagination;
