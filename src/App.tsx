import React, { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import MainApp from "./navigation";
import store, { persistor } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
}
export default App;
