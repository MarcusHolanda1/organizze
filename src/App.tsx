import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import MainApp from "./navigation";
import store, { persistor } from "./redux/store";

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
