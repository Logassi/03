import express, { Application } from "express";
import db from "./db";
import expenseRoute from "./routes/expense.route";
// import { PORT } from "./utils/env.config";

const app: Application = express();

// Middleware
app.use(express.json());

// Route

// Expense
app.use("/expense-management", expenseRoute);

// Error Handling

db.getConnection((err, connection) => {
  console.log(`Trying to connect to DB`);

  if (err) {
    return console.log(err);
  }

  console.log("Connection to DB Success");
});

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

export default app;
