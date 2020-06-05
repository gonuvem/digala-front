import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone } from 'react-icons/fi';

import { Container, Card, LeftSide, RightSide } from './styles';

import ForgotForm from './forgotForm';
import RenewForm from './renewPasswordForm';

import illustration from '../../assets/signin_illustration.png';
import logo from '../../assets/logo.png';

const Forgot: React.FC = () => {
  const [codeSended, setCodeSended] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleFinishSendCode = useCallback((email) => {
    setUserEmail(email);
    setCodeSended(true);
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
          <span>
            Coloque seu e-mail abaixo para receber o código de recuperação.
          </span>
          {!codeSended ? (
            <ForgotForm onFinish={handleFinishSendCode} />
          ) : (
            <RenewForm userEmail={userEmail} />
          )}
          <Link to="/">Voltar para login</Link>
        </RightSide>
      </Card>
    </Container>
  );
};

export default Forgot;
