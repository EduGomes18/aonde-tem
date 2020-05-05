import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "~/Store";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Client from "~/Screens/Auth/Client";
import Company from "~/Screens/Auth/Company";
import Create from "~/Screens/Auth/Create";
import App from "~/Screens/App";

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Auth: createSwitchNavigator({
          Client,
          Company,
          Create,
        }),
        App,
      },
      {
        initialRouteName: isSigned ? "App" : "Auth",
      }
    )
  );
