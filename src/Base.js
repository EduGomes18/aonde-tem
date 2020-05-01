import React from "react";
import { useSelector } from "react-redux";
import createRouter from "./Routes";

export default function Base() {
  //autenticacao desativada por enquanto
  //const signed = useSelector(state => state.login.signed);

  //const Routes = createRouter(signed);

  return <Routes />;
}
