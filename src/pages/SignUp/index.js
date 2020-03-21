import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import Input from '../../components/Input';

import { signUpRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit(data) {
    const { name, email, password } = data;
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Digite seu nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/">Já tenho login</Link>
    </>
  );
}
