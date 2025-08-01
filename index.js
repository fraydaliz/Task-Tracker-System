import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import { employee } from "./routes/employeeRoutes.js";
import {task }from "./routes/tasksRoutes.js";
import cors from "cors";
import fs from "fs";
import https from "https";

const enviroment = process.env.NODE_ENVIROMENT;
let port = 3000;

if (enviroment === "production") {
 port = 443;
}

app.use(express.json());
app.use(cors());
app.use("/api", employee);
app.use("/api", task);

if (enviroment === "production") {
  const options = {
    key: fs.readFileSync(
     "/etc/letsencrypt/live/fray-banckend.codex-p4-2025.click/privkey.pem"
    ),
    cert: fs.readFileSync(
     "/etc/letsencrypt/live/fray-banckend.codex-p4-2025.click/fullchain.pem"
    ),
  };
  https.createServer(options, app).listen(port, () => {
    console.log("HTTPS server is running on port 443");
  });
} else {
  app.listen(port, () => {
    console.log(`listening in port ${port}`);
  })
}
