import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="" />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Entrar</button>
      </Form>
      <Link to="/register">Criar conta grátis</Link>
    </>
  );
}
