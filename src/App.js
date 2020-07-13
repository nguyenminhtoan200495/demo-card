import React, { useState } from "react";
import { AuthContext } from "./context/auth";
import AppRouter from "./routes";

const App = (props) => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <div className="">
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
