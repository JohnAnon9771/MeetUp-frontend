import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';
import Input from '../../components/Input';

import { signUpRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

export default function SignUp() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigátorio'),
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
    const { name, email, password } = data;
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="" />
      <Form ref={formRef} onSubmit={handleSubmit}>
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
