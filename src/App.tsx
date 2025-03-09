import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import { persistor, store } from "./store/store";
import FavoriteList from "./components/FavoriteList";
import Navbar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/favorites" element={<FavoriteList />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
