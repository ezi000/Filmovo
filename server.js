import app from "./app.js";
import https from "https";
import fs from "fs";

// const port = 3000;
// const server = http.createServer(app);
// server.listen(port);

const privateKey  = fs.readFileSync('src/cert/privatekey.key', 'utf8');
const certificate = fs.readFileSync('src/cert/certificate.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};


const httpsServer = https.createServer(credentials, app);
httpsServer.listen(3000);