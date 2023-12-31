import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
import MainWrapper from "./layouts/MainWrapper";

function App() {
  console.log("first");
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <MainWrapper route={route} withSidebar={route.withSidebar}>
                <route.component />
              </MainWrapper>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
