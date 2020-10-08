import React, { useState, useCallback, useMemo, forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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
  UPDATE_OWN_QUESTIONS,
} from '../../../services/requests/questions';
import updateOwnFormData from '../../../services/logic/updateOwnFormData';
import createOwnQuestions from '../../../services/logic/createOwnQuestions';
import updateOwnQuestions from '../../../services/logic/updateOwnQuestions';

const Pagination: React.RefForwardingComponent<HTMLDivElement> = (_, ref) => {
  const [pagesCount, setPagesCount] = useState(1);

  const [questionsData, formData] = useSelector<
    ApplicationState,
    [Question[], Form | null]
  >((state) => [state.questions.questions, state.forms.form]);

  const [updateForm, { loading: updateFormLoading }] = useMutation(UPDATE_FORM);
  const [createQuestions, { loading: createQuestionsLoading }] = useMutation(
    CREATE_OWN_QUESTIONS,
  );
  const [updateQuestions, { loading: updateQuestionsLoading }] = useMutation(
    UPDATE_OWN_QUESTIONS,
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

  const loading = useMemo(() => {
    return (
      updateFormLoading || createQuestionsLoading || updateQuestionsLoading
    );
  }, [createQuestionsLoading, updateFormLoading, updateQuestionsLoading]);

  const handleUpdate = useCallback(() => {
    if (formData?.id && questionTypes) {
      if (formData.numResponses > 0) {
        toast.warning('Essa pesquisa já foi respondida');
        return;
      }

      const questionsToCreate = questionsData.filter((question) =>
        isUuid(question.id),
      );

      const questionsToUpdate = questionsData.filter(
        (question) => !isUuid(question.id),
      );

      if (questionsToCreate.length > 0) {
        createOwnQuestions(
          createQuestions,
          questionsToCreate,
          formData?.id,
          questionTypes,
        );
      }

      if (questionsToUpdate.length > 0) {
        updateOwnQuestions(
          updateQuestions,
          questionsToUpdate,
          formData?.id,
          questionTypes,
        );
      }
    }
    updateOwnFormData(updateForm, formData);
  }, [
    formData,
    questionTypes,
    updateForm,
    questionsData,
    createQuestions,
    updateQuestions,
  ]);

  return (
    <Container ref={ref}>
      <SolidButton onClick={handleUpdate}>
        {loading ? (
          <div id="loading-container">
            <LoadingSpinner />
          </div>
        ) : (
          'Publicar'
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

export default forwardRef(Pagination);
