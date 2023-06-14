import React, {useState} from "react";
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
  const navigate = useNavigate();
  const { setAuth } = useAuth()

  const [error, setError] = useState("");

  // TO REPLACE WITH GOOGLE OAUTH CLIENT LOGIC
  const handleLogin = async () => {
    try {
      const response: AxiosResponse<LoginResponse> = await axios.get(`${API_URL}/users/1`, {
      });

      if (response.status === 200) {
        const userData = response.data;
        console.log(userData)
        setAuth(userData);
        navigate("/dashboard/home");

      } else {
        setError("Invalid email");
      }
    } catch (error) {
      setError("An error occurred during login");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}

      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
