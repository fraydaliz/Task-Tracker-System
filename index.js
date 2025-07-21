import express from "express";
import { employee } from "./routes/employeeRoutes.js";
import { task } from "./routes/tasksRoutes";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", employee);

app.use("/api", task);

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
