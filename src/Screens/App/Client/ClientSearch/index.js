import React, { useState } from "react";
import { useNavigation } from "react-navigation-hooks";
import Routes from "./Routes";

export default function ClientSearch() {
  const { navigate } = useNavigation();

  return (
    <>
      <Routes />
    </>
  );
}
