import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiMail, FiPhone, FiKey, FiLock } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { Container, Card, LeftSide, RightSide } from './styles';

import IconTextField from '../../components/Common/IconTextField';
import SolidButton from '../../components/Common/SolidButton';
import LoadingSpinner from '../../components/Common/LoadingSpinner';

import illustration from '../../assets/signin_illustration.png';
import logo from '../../assets/logo.png';

import { FORGOT_PASSWORD } from '../../services/requests/authentication';
import getValidationErrors from '../../utils/getValidationErrors';
import ForgotSchema from '../../schemas/forgotPass';
import forgotErrors from '../../errors/forgotErrors';

interface FormProps {
  onFinish: any;
  loading: boolean;
  formRef: React.RefObject<FormHandles>;
}

interface FormCodeData {
  email: string;
}

interface FormReneweData {
  code: string;
  newPassword: string;
  confirmPassword: string;
}

const SendCodeForm: React.FC<FormProps> = ({ onFinish, loading, formRef }) => (
  <Form ref={formRef} onSubmit={onFinish}>
    <IconTextField
      icon={FiMail}
      name="email"
      id="email-field"
      placeholder="Coloque seu e-mail"
    />
    <SolidButton text={loading ? <LoadingSpinner /> : 'Enviar código'} />
  </Form>
);

const RenewPasswordForm: React.FC<FormProps> = ({
  onFinish,
  loading,
  formRef,
}) => (
  <Form onSubmit={() => null}>
    <IconTextField
      icon={FiKey}
      name="code"
      id="code-field"
      placeholder="Código"
    />
    <IconTextField
      icon={FiLock}
      name="new-password"
      id="new-password-field"
      placeholder="Coloque sua nova senha"
    />
    <IconTextField
      icon={FiLock}
      name="confirm-new-password"
      id="confirm-new-password-field"
      placeholder="Confirme sua nova senha"
    />
    <SolidButton text="Renovar senha" />
  </Form>
);

const Forgot: React.FC = () => {
  const forgotFormRef = useRef<FormHandles>(null);
  const renewFormRef = useRef<FormHandles>(null);
  const [codeSended, setCodeSended] = useState(false);
  const [forgot, { loading: forgotLoading }] = useMutation(FORGOT_PASSWORD);

  const handleSendCode = useCallback(async (data: FormCodeData) => {
    try {
      await ForgotSchema.validate(data, { abortEarly: false });

      const response = await forgot({ variables: { ...data } });

      if (response.data.forgotPassword.error) {
        throw new Error(response.data.forgotPassword.error.internalCode);
      }

      setCodeSended(true);
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

  const handleRenewPassword = useCallback(() => null, []);

  return (
    <Container>
      <Card>
        <LeftSide>
          <img src={illustration} alt="ilustração de formulário" />
          <h3>Bem vindo ao Diga Lá!</h3>
          <p>Para requisitar um acesso basta entrar em contato.</p>
          <div>
            <FiMail size={16} />
            <span>contato@gonuvem.com</span>
          </div>
          <div>
            <FiPhone size={16} />
            <span>(86) 9 9931-8394</span>
          </div>
        </LeftSide>
        <RightSide>
          <img src={logo} alt="DigaLa logo" />
          <span>
            Coloque seu e-mail abaixo para receber o código de recuperação.
          </span>
          {!codeSended ? (
            <SendCodeForm
              formRef={forgotFormRef}
              loading={forgotLoading}
              onFinish={handleSendCode}
            />
          ) : (
            <RenewPasswordForm
              formRef={renewFormRef}
              loading={false}
              onFinish={handleRenewPassword}
            />
          )}
          <Link to="/forgot">Voltar para login</Link>
        </RightSide>
      </Card>
    </Container>
  );
};

export default Forgot;
