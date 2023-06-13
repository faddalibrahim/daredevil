import React, {useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";


import useAuth from "@hooks/useAuth";

interface LoginResponse {
  status: number;
  data: UserData;
}

interface UserData {
  // Define the structure of your user data here
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response: AxiosResponse<LoginResponse> = await axios.post("/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const userData = response.data.data;

        setAuth(userData);

        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred during login");
      console.error(error);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
