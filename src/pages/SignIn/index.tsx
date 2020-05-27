import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccount,
  CreateAccountText,
} from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={logoImg} />

        <Title>Faça seu logon</Title>

        <Input name="email" icon="mail" placeholder="E-mail" />

        <Input name="password" icon="lock" placeholder="Senha" />

        <Button>Entrar</Button>

        <ForgotPassword>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Container>

      <CreateAccount>
        <CreateAccountText>Criar uma conta</CreateAccountText>
      </CreateAccount>
    </>
  );
};

export default SignIn;
