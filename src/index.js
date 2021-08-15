import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-9elj7pr7.us.auth0.com"
    clientId="5XEZ8AZoQFgZP59DkA3xTf3IODlUrL7O"
    redirectUri='http://localhost:3001'
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

