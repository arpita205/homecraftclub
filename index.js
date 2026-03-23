
const express = require('express');
const app = express();
console.log("Deployed via CI/CD");

app.use(express.json()); // VERY IMPORTANT

app.post('/webhook', (req, res) => {
    const { exec } = require('child_process');

    console.log("Webhook triggered!");

    exec('cd /home/ec2-user/homecraftclub && git pull origin main && npm install && pm2 restart all',
        (error, stdout, stderr) => {
            console.log("STDOUT:", stdout);
            console.log("STDERR:", stderr);
        });

    res.send("Deployment triggered");
});

app.listen(3000, () => console.log("Server running on port 3000"));
