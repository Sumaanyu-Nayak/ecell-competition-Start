import React from "react";
import Login from "@react-login-page/page1";

const css = {
  "--login-bg": "#edeff3",
  "--login-bg-from": "#46acfc",
  "--login-bg-to": "#3ffbd8",
};

const LoginP = () => <Login style={{ height: 1080, ...css }} />;

export default LoginP;