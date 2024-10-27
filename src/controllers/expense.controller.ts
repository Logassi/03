import { NextFunction, Request, Response } from "express";
import db from "../db";
import { QueryError } from "mysql2";
import { Expense, IExpense } from "../models/expense.model";

// type Expense = {
//   id: Number;
//   title: string;
//   nominal: number;
//   type: string;
//   category: string;
//   date: Date;
// };

export async function GetAllExpenseController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    db.query("select * from expense", (err: QueryError, result: Expense[]) => {
      if (err) {
        throw err;
      }

      res.status(200).send({
        message: "Success",
        data: result,
      });
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function GetExpenseByIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    db.query<IExpense[]>(
      "select * from expense where id = ?",
      [id],
      (err: QueryError | null, result: Expense[]) => {
        if (err) {
          throw err;
        }

        res.status(200).send({
          message: "Success",
          data: result,
        });
      }
    );
  } catch (err) {
    next(err);
  }
}
