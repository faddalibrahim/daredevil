import { Client, Account, Databases, ID, Permission, Role } from "appwrite";
import APPWRITE_SERVER from "./server";

const AW_API = {
  init() {
    return new Client()
      .setEndpoint(APPWRITE_SERVER.endpoint)
      .setProject(APPWRITE_SERVER.projectId);
  },

  createAccount() {
    return new Account(this.init()).createOAuth2Session("google");
  },

  getAccount() {
    return new Account(this.init()).get();
  },

  createDaredevilAccount(username: string, email: string, password: string) {
    return new Account(this.init()).create(
      ID.unique(),
      email,
      password,
      username
    );
  },

  loginDaredevilAccount(email: string, password: string) {
    return new Account(this.init()).createEmailSession(email, password);
  },

  createJourney(journey: any) {
    return new Databases(this.init()).createDocument(
      APPWRITE_SERVER.databaseId,
      APPWRITE_SERVER.journeysCollectionId,
      ID.unique(),
      journey,
      [
        Permission.read(Role.any()), // Anyone can view this document
        Permission.write(Role.any()), // Anyone can view this document
      ]
    );
  },

  createSessionAnonymous() {
    return new Account(this.init()).createAnonymousSession();
  },

  createDare(dare: any) {
    return new Databases(this.init()).createDocument(
      APPWRITE_SERVER.databaseId,
      APPWRITE_SERVER.darepoolCollectionId,
      ID.unique(),
      dare
    );
  },
};

export default AW_API;
