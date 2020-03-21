export function signUpRequest(data) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { data },
  };
}

export function signUpSuccess(token, user) {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
    payload: { token, user },
  };
}
