import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiKey, FiLock } from 'react-icons/fi';

import { Container, Card, LeftSide, RightSide } from './styles';

import IconTextField from '../../components/Common/IconTextField';
import SolidButton from '../../components/Common/SolidButton';

import illustration from '../../assets/signin_illustration.png';
import logo from '../../assets/logo.png';

interface FormProps {
  onFinish: any;
}

const SendCodeForm: React.FC<FormProps> = ({ onFinish }) => (
  <form action="">
    <IconTextField
      icon={FiMail}
      name="email"
      id="email-field"
      placeholder="Coloque seu e-mail"
    />
    <SolidButton onClick={onFinish} text="Enviar código" />
  </form>
);

const RenewPasswordForm: React.FC<FormProps> = ({ onFinish }) => (
  <form action="">
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
    <SolidButton onClick={onFinish} text="Renovar senha" />
  </form>
);

const Forgot: React.FC = () => {
  const [codeSended, setCodeSended] = useState(false);

  const handleSendCode = useCallback(() => {
    setCodeSended(true);
  }, []);

  const handleRenewPassword = useCallback(() => {}, []);

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
            <SendCodeForm onFinish={handleSendCode} />
          ) : (
            <RenewPasswordForm onFinish={handleRenewPassword} />
          )}
          <Link to="/forgot">Voltar para login</Link>
        </RightSide>
      </Card>
    </Container>
  );
};

export default Forgot;
