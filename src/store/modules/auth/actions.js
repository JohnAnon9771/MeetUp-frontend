export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(user, token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { user, token },
  };
}

export function singUpFailure() {
  return {
    type: '@auth/SIGN_UP_FAILURE',
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}
