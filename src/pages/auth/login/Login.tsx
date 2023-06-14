import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

import useAuth from "@hooks/useAuth";
import { API_URL } from "@utils/constants";
import Button from "@components/button/Button";

interface LoginResponse {
  status: number;
  data: User;
}

const Login: React.FC = () => {
 
  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}

      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
