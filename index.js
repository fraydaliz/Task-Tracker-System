import express from "express";
import { employee } from "./routes/employeeRoutes.js";
import { task } from "./routes/tasksRoutes";
import cors from 'cors'

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

app.use("/api", employee);

app.use("/api", task);

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
