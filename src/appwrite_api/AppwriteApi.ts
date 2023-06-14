import { Client, Account, ID } from "appwrite";
import APPWRITE_SERVER from "./server";

const AW_API = {
  provider() {
    return new Client()
      .setEndpoint(APPWRITE_SERVER.endpoint)
      .setProject(APPWRITE_SERVER.projectId);
  },

  createAccount() {
    return new Account(this.provider()).createOAuth2Session("google");
  },
};

export default AW_API;
