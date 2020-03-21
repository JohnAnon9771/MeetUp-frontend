import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {}
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
