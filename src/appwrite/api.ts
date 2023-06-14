import { Client, Account, ID } from "appwrite";
import APPWRITE_SERVER from "./server";

const AW_API = {
  init() {
    return new Client()
      .setEndpoint(APPWRITE_SERVER.endpoint)
      .setProject(APPWRITE_SERVER.projectId);
  },

  createAccount() {
    return new Account(this.init()).createOAuth2Session("google", 'http://localhost:5173/dashboard/home', 'http://localhost:5173/login');
  },
};

export default AW_API;
