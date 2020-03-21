import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import Input from '../../components/Input';
import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  function handleSubmit(data) {
    const { email, password } = data;
    dispatch(signInRequest(email, password));
  }

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
