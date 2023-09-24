import express from "express";
import cors from "cors";
import testRouter from "../../src/routes/test.js";
import usersRouter from "../../src/routes/users.js";
import expensesRouter from "../../src/routes/expenses.js";
import debtsRouter from "../../src/routes/debts.js";
import serverless from "serverless-http";
export const app = express();

// use json middleware
app.use(express.json());

//let everyone use our api
app.use(cors());

app.get("/", (req, res) => {
  res.json({ success: true, page: "root page" });
});

app.use("/api/test", testRouter);
app.use("/api/users", usersRouter);
app.use("/api/expenses", expensesRouter);
app.use("/api/debts", debtsRouter);

export const handler = serverless(app);
