import React, { useState, ChangeEvent } from "react";
// import GoogleOAuthButton from "./Google";
// import AW_API from '@appwrite/api';
import Button from "@components/button/Button";
import Input from "@components/input/Input";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
  
    console.log("Form Data:", formData);

  };

  return (
    <div>
      {/* <GoogleOAuthButton /> */}
      <Input
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      >
        Username
      </Input>
      <Input
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      >
        Email
      </Input>
      <Input
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      >
        Password
      </Input>
      <Button onClick={handleSubmit}>Login</Button>
    </div>
  );
};

export default Register;
