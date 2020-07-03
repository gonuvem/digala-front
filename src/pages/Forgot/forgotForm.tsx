import React, { useCallback, useRef } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiMail } from 'react-icons/fi';
import { toast } from 'react-toastify';

import IconTextField from '../../components/ResearchFields/IconTextField';
import SolidButton from '../../components/Common/SolidButton';
import LoadingSpinner from '../../components/Common/LoadingSpinner';

import { FORGOT_PASSWORD } from '../../services/requests/authentication';
import getValidationErrors from '../../utils/getValidationErrors';
import ForgotSchema from '../../schemas/forgotPass';
import forgotErrors from '../../errors/forgotErrors';

interface FormCodeData {
  email: string;
}

interface ForgotForm {
  onFinish: any;
}

const ForgotForm: React.FC<ForgotForm> = ({ onFinish }) => {
  const forgotFormRef = useRef<FormHandles>(null);
  const [forgot, { loading: forgotLoading }] = useMutation(FORGOT_PASSWORD);

  const handleSendCode = useCallback(async (data: FormCodeData) => {
    try {
      await ForgotSchema.validate(data, { abortEarly: false });

      const response = await forgot({ variables: { ...data } });

      if (response.data.forgotPassword.error) {
        throw new Error(response.data.forgotPassword.error.internalCode);
      }

      onFinish(data.email);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        forgotFormRef.current?.setErrors(errors);
        return;
      }

      const internalCode = err.message as string;
      toast.error(forgotErrors[internalCode]);
    }
  }, []);

  return (
    <Form ref={forgotFormRef} onSubmit={handleSendCode}>
      <IconTextField
        validatePattern={false}
        icon={FiMail}
        name="email"
        id="email-field"
        placeholder="Coloque seu e-mail"
      />
      <SolidButton>
        {forgotLoading ? <LoadingSpinner /> : 'Enviar código'}
      </SolidButton>
    </Form>
  );
};

export default ForgotForm;
