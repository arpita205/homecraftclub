const express = require('express');
const app = express();
app.get('/',(req, res) => { res.send('<h1>🏠 HomeCraftClub</h1><p>Your dynamic website is live 🚀</p>');});
app.listen(3000, '0.0.0.0', () =>{console.log('server running on port 3000');});
