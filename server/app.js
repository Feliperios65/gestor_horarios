import express from "express";
import cors from "cors";
import Periodoroutes from "./routes/periodo.routes.js";
import Ambienteroutes from "./routes/ambiente.routes.js";
import Docenteroutes from "./routes/docente.routes.js";
import Horarioroutes from "./routes/horario.routes.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(Periodoroutes);
app.use(Ambienteroutes);
app.use(Docenteroutes);
app.use(Horarioroutes);
app.listen(4000);
console.log(`Server is listening on port http://localhost:4000/`);
