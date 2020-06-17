import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { FiBookmark, FiPlusCircle } from 'react-icons/fi';

import SolidButton from '../../../components/Common/SolidButton';

import { Container, PanelArea } from './styles';

import { ApplicationState } from '../../../store';
import { Form } from '../../../store/ducks/forms/types';
import { UPDATE_FORM } from '../../../services/requests/forms';
import updateOwnFormData from '../../../services/logic/updateOwnFormData';

const Pagination: React.FC = () => {
  const [pagesCount, setPagesCount] = useState(1);
  const formData = useSelector<ApplicationState, Form | null>(
    (state) => state.forms.form,
  );

  const [updateForm, { loading: updateFormLoading }] = useMutation(UPDATE_FORM);

  const handleCreatePage = useCallback(
    () => setPagesCount((state) => state + 1),
    [],
  );

  const handleUpdate = useCallback(() => {
    updateOwnFormData(updateForm, formData);
  }, [formData, updateForm]);

  return (
    <Container>
      <SolidButton onClick={handleUpdate}>Publicar</SolidButton>
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
