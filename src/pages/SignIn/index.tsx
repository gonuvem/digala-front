import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiMail, FiPhone, FiLock } from 'react-icons/fi';

import { Container, Card, LeftSide, RightSide } from './styles';

import IconTextField from '../../components/Common/IconTextField';
import SolidButton from '../../components/Common/SolidButton';

import illustration from '../../assets/signin_illustration.png';
import logo from '../../assets/logo.png';

const SignIn: React.FC = () => (
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
        <Form onSubmit={() => null}>
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
          />
          <SolidButton text="Entrar" />
        </Form>
        <Link to="/forgot">Esqueceu sua senha/usuário?</Link>
      </RightSide>
    </Card>
  </Container>
);

export default SignIn;
