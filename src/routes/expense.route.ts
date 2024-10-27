import { Router } from "express";
import {
  GetAllExpenseController,
  GetExpenseByIdController,
} from "../controllers/expense.controller";
// import { GetAllUsers, GetUserDetail } from "../controllers/user.controller";
// import masukMiddleWare from "../middlewares/masuk.middleware";

const router = Router();

// GET ALL EXPENSES FROM DB
router.get("/expense", GetAllExpenseController);

// GET AN EXPENSE FROM DB
router.get("/expense/:id", GetExpenseByIdController);

// POST AN EXPENSE TO DB

// UPDATE AN EXPENSE

// DELETE AN EXPENSE

export default router;
