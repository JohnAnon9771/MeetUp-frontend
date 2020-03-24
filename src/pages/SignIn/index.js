import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../../components/Input';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Email inválido! Tente com um email válido')
          .required('Email é obrigátorio'),
        password: Yup.string()
          .min(6, 'Minimo de 6 caracteres')
          .required('Senha é obrigátoria'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
    const { email, password } = data;
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="" />
      <Form ref={formRef} onSubmit={handleSubmit}>
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
