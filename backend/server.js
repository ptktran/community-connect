const express = require('express');
const cors = require('cors');
const { auth } = require('express-oauth2-jwt-bearer');

const app = express();
app.use(cors());

const PORT = 5000

app.listen(PORT, console.log(`Server Started at Port ${PORT}`));

const jwtCheck = auth({
    audience: 'https://communityconnect.com',
    issuerBaseURL: 'https://dev-0id2uicgi5udqk1l.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});
  
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(jwtCheck);
  
// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/test', (req, res) => {
    const auth = req.auth;
    res.send(JSON.stringify(auth));
})

  

