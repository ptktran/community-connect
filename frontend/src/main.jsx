import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="https://dev-0id2uicgi5udqk1l.us.auth0.com"
    clientId="E0ZRQMB9VfXkeOFEr65n2bwghc7fNume"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/signup'
    }}
  >
    <App />
  </Auth0Provider>,
)
