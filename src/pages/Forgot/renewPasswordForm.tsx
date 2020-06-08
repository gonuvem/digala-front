import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { FiKey, FiLock } from 'react-icons/fi';

import IconTextField from '../../components/Common/IconTextField';
import SolidButton from '../../components/Common/SolidButton';
import LoadingSpinner from '../../components/Common/LoadingSpinner';

import { RENEW_PASSWORD } from '../../services/requests/authentication';
import RenewSchema from '../../schemas/renewPass';
import getValidationErrors from '../../utils/getValidationErrors';
import renewErrors from '../../errors/renewErrors';

interface RenewFormProps {
  userEmail: string;
}

interface RenewFormData {
  code: string;
  newPassword: string;
  confirmPassword: string;
}

const RenewPasswordForm: React.FC<RenewFormProps> = ({ userEmail }) => {
  const renewFormRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [renew, { loading: renewLoading }] = useMutation(RENEW_PASSWORD);

  const handleRenewPassword = useCallback(async (data: RenewFormData) => {
    try {
      await RenewSchema.validate(data, { abortEarly: false });

      const response = await renew({
        variables: {
          email: userEmail,
          password: data.newPassword,
          code: data.code,
        },
      });

      if (response.data.renewPassword.error) {
        throw new Error(response.data.renewPassword.error.internalCode);
      }

      toast.success('Senha trocada com sucesso!');
      setTimeout(() => history.push('/'), 2000);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        renewFormRef.current?.setErrors(errors);
        return;
      }

      const internalCode = err.message as string;
      toast.error(renewErrors[internalCode]);
    }
  }, []);

  return (
    <Form ref={renewFormRef} onSubmit={handleRenewPassword}>
      <IconTextField
        icon={FiKey}
        name="code"
        id="code-field"
        placeholder="Código"
      />
      <IconTextField
        icon={FiLock}
        name="newPassword"
        id="new-password-field"
        placeholder="Coloque sua nova senha"
        type="password"
      />
      <IconTextField
        icon={FiLock}
        name="confirmPassword"
        id="confirm-new-password-field"
        placeholder="Confirme sua nova senha"
        type="password"
      />
      <SolidButton>
        {renewLoading ? <LoadingSpinner /> : 'Renovar senha'}
      </SolidButton>
    </Form>
  );
};

export default RenewPasswordForm;
