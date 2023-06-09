import { initializeApp, getApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
    
};

let app;
if (!getApp()) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}
export const auth: Auth = getAuth(app);
