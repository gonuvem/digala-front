import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiMail, FiPhone, FiLock } from 'react-icons/fi';

import { Container, Card, LeftSide, RightSide } from './styles';

import IconTextField from '../../components/Common/IconTextField';
import SolidButton from '../../components/Common/SolidButton';
import LoadingSpinner from '../../components/Common/LoadingSpinner';

import illustration from '../../assets/signin_illustration.png';
import logo from '../../assets/logo.png';

import { SIGN_IN } from '../../services/requests/authentication';
import SignInSchema from '../../schemas/signIn';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [
    signIn,
    { data: signInData, loading: signInLoading, error },
  ] = useMutation(SIGN_IN);

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      await SignInSchema.validate(data, { abortEarly: false });

      const response = await signIn({ variables: { ...data } });

      if (response.data.login.error) {
        throw new Error(response.data.login.error.message);
      }

      localStorage.setItem('token', response.data.login.token);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

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
          <span>Entre no Diga Lá</span>
          <Form ref={formRef} onSubmit={handleSignIn}>
            <IconTextField
              icon={FiMail}
              name="email"
              id="email-field"
              placeholder="Coloque seu e-mail"
            />
            <IconTextField
              icon={FiLock}
              name="password"
              id="password-field"
              placeholder="Coloque sua senha"
              type="password"
            />
            <SolidButton
              text={!signInLoading ? 'Entrar' : <LoadingSpinner />}
            />
          </Form>
          <Link to="/forgot">Esqueceu sua senha/usuário?</Link>
        </RightSide>
      </Card>
    </Container>
  );
};

export default SignIn;
