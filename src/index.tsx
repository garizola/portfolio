import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./app/layout/App";
import ComingSoon from "./ComingSoon";

// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  
    <HashRouter>
      {/* <App /> */}
      <ComingSoon />
    </HashRouter>
  
);


