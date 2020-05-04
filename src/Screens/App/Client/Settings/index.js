import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "react-navigation-hooks";
import { signOut } from "~/Store/modules/login/actions";

import Button from "~/Components/Button";
import {
  DescribeArea,
  DescribeText,
  HistoryCard,
  HistList,
  SearchButton,
  SearchText,
} from "./styles";
import { Principal, White } from "~/Config/Global";

import Dashboard from "~/Components/Dashboard";

export default function Settings() {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <>
      <Dashboard>
        <Button
          color={Principal}
          title="LOGOUT"
          onPress={handleLogout}
          textcolor={White}
        ></Button>
      </Dashboard>
    </>
  );
}
