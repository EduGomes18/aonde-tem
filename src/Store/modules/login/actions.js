export function signInRequest(email, password) {
  return {
    type: "@login/SIGN_IN_REQUEST",
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: "@login/SIGN_IN_SUCCESS",
    payload: { token, user },
  };
}

export function signUpRequest(email, password, business) {
  return {
    type: "@login/SIGN_UP_REQUEST",
    payload: { email, password, business },
  };
}
export function signOut() {
  return {
    type: "@login/SIGN_OUT",
  };
}

export function signFailure() {
  return {
    type: "@login/SIGN_FAILURE",
  };
}
