 import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Repositories from "./components/Repositories";
import RepositoryItemDetails from "./components/RepositoryItemDetails";
import Analysis from "./components/Analysis";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Loginpat from "./components/Loginpat";
import AppContext from "./context/AppContext";

import './App.css';

const App = () => {
  const [onUsername, onSetUsername] = useState("");

  const enterUsername = (name) => {
    onSetUsername(name);
  };

  return (
    <AppContext.Provider
      value={{
        contextUsername: onUsername,
        enterUsername,
      }}
    >
      <Routes>
        <Route path="/login" element={<Loginpat />} />

        <Route
          path="/"
          element={<ProtectedRoute element={<Home />} />}
        />

        <Route
          path="/repositories"
          element={<ProtectedRoute element={<Repositories />} />}
        />

        <Route
          path="/repositories/:repoName"
          element={<ProtectedRoute element={<RepositoryItemDetails />} />}
        />

        <Route
          path="/analysis"
          element={<ProtectedRoute element={<Analysis />} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
