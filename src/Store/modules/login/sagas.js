import { Alert } from "react-native";
import { takeLatest, call, put, all } from "redux-saga/effects";
import { signInSuccess, signFailure } from "./actions";
import api from "~/Services/api";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "/sessions", {
      email,
      password,
    });
    const { token, user } = response.data;

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert("Erro de autenticação", "Email ou senha incorreta");
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { email, password, business } = payload;

    const response = yield call(api.post, "/users", {
      name: email,
      email,
      password,
      business,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert("Falha no cadastro", "Verifique seus dados");
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.login;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@login/SIGN_IN_REQUEST", signIn),
  takeLatest("@login/SIGN_UP_REQUEST", signUp),
]);
