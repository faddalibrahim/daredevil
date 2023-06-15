import { Client, Account,Permission,User, Role, Databases, ID } from "appwrite";
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

  getAccount() {
    return new Account(this.init()).get();
  },

  createJourney(journey: any) {
    return new Databases(this.init()).createDocument(
      APPWRITE_SERVER.databaseId,
      APPWRITE_SERVER.journeysCollectionId,
      ID.unique(),
      journey, 
      [Permission.read(Role.any()), Permission.write(Role.any()), Permission.update(Role.any())]
    );
  },

  createDare(dare: any) {
    return new Databases(this.init()).createDocument(
      APPWRITE_SERVER.databaseId,
      APPWRITE_SERVER.darepoolCollectionId,
      ID.unique(),
      dare,
      [Permission.read(Role.any()), Permission.write(Role.any()), Permission.update(Role.any())]
    );
  },


  getUserData(): Promise<User> {
    return new Promise((resolve, reject) => {
      const account = new Account(this.init());

      account.get()
        .then((response:User) => {
          resolve(response);
        })
        .catch((error:Error) => {
          reject(error);
        });
    });
  },
};

export default AW_API;
