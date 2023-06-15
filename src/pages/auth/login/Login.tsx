import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

import useAuth from "@hooks/useAuth";
import { API_URL } from "@utils/constants";
import Button from "@components/button/Button";
import AW_API from "../../../appwrite/api";

interface LoginResponse {
  status: number;
  data: User;
}

const Login: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
