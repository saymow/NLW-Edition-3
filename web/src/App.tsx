import React from "react";
import GlobalContext from "./context";
import Routes from "./routes";

import "leaflet/dist/leaflet.css";

function App() {
  return (
    <GlobalContext>
      <Routes />
    </GlobalContext>
  );
}

export default App;
