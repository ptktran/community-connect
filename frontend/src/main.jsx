import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="https://dev-h5u1zxlhfro6lvy0.us.auth0.com"
    clientId="Z2KTZAdA3rKijPVsSBJgAvqDFc8M0mv2"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/signup'
    }}
  >
    <App />
  </Auth0Provider>,
)
