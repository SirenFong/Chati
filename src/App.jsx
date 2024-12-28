import React from "react";
import { Routes, Route } from "react-router-dom";

import Messages from "./pages/Messages";

const App = () => {
  return (
    <Routes>
      <Route index={true} element={<Messages />}></Route>
    </Routes>
  );
};

export default App;
