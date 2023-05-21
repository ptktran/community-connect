import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-dn0k1crv21m0kh8f.us.auth0.com"
//     clientId="q8xMmdBiWC0krNvtgI4gNCoBDvGOiADk"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );