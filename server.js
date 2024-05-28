import app from "./app.js";
import https from "https";
import fs from "fs";

// const port = 3000;
// const server = http.createServer(app);
// server.listen(port);

// Wczytanie klucza prywatnego oraz certyfikatu SSL
const privateKey  = fs.readFileSync('src/cert/privatekey.key', 'utf8');
const certificate = fs.readFileSync('src/cert/certificate.crt', 'utf8');

// Konfiguracja danych uwierzytelniających dla serwera HTTPS
const credentials = {key: privateKey, cert: certificate};

// Utworzenie serwera HTTPS
const httpsServer = https.createServer(credentials, app);

// Nasłuchiwanie na porcie 3000
httpsServer.listen(3000);