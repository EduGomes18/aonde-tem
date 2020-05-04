export function signInRequest(identifier, password) {
  return {
    type: "@login/SIGN_IN_REQUEST",
    payload: { identifier, password },
  };
}

export function signInSuccess(jwt, user) {
  return {
    type: "@login/SIGN_IN_SUCCESS",
    payload: { jwt, user },
  };
}

export function signUpRequest(email, password, config) {
  return {
    type: "@login/SIGN_UP_REQUEST",
    payload: { email, password, config },
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