import { Client, Account, Databases, ID } from "appwrite";
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

  createJourney(journey: any) {
    return new Databases(this.init()).createDocument(
      APPWRITE_SERVER.databaseId,
      APPWRITE_SERVER.journeysCollectionId,
      ID.unique(),
      journey
    );
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
