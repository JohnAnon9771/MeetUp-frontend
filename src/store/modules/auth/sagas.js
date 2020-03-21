import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signUpSuccess } from './actions';

import api from '../../../services/api';

export function* signUp({ payload }) {
  const { name, email, password } = payload.data;
  const user = yield call(api.post, '/users', { name, email, password });

  yield put(signUpSuccess(user));
  toast.success('Parabéns! Você está cadastrado no nosso sistema.');
}

export default all([takeLatest('@auth/SIGN_UP_REQUEST', signUp)]);
