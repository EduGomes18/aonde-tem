import React from "react";
import { useSelector } from "react-redux";
import createRouter from "./Routes";

const App = () => {
  const business = useSelector((state) => state.login.business);

  const Routes = createRouter(business);
  return <Routes />;
};

export default App;
