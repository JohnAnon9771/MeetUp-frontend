import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { singUpFailure, signInSuccess } from './actions';

import api from '../../../services/api';

import history from '../../../services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const response = yield call(api.post, 'session', { email, password });

  const { user, token } = response.data;
  yield put(signInSuccess(user, token));
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, '/users', { name, email, password });

    toast.success('Parabéns! Você está cadastrado no nosso sistema.');
    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro, tente novamente mais tarde.');
    yield put(singUpFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
