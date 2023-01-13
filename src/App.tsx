import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { initializeApp } from "firebase/app";

import MainApp from "./navigation";
import store, { persistor } from "./redux/store";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1RWdHngPlxXzHZDvP_y5V44sE66SQLEQ",
  authDomain: "organizze-dc6f3.firebaseapp.com",
  projectId: "organizze-dc6f3",
  storageBucket: "organizze-dc6f3.appspot.com",
  messagingSenderId: "266231841474",
  appId: "1:266231841474:web:2f64a39727b12a30d2b15b",
};

const app = initializeApp(firebaseConfig);

export const dbFirestore = getFirestore(app);

function App() {
  if (__DEV__) {
    import("../src/config/ReactotronConfig").then(() =>
      console.log("Reactotron Configured")
    );
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
}
export default App;
