import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // all frontend uri for resoure sharing :: * for all
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

//API end-points createtion

//import all router
import startupRouter from "./routers/startup.router.js";

//royter delecation
app.use("/api/v1/startups", startupRouter);

export default app;
