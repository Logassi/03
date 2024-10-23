import { NextFunction, Request, Response } from "express";
import db from "../db";
import { QueryError } from "mysql2";

type Expense = {
  id: Number;
  title: string;
  nominal: number;
  type: string;
  category: string;
  date: Date;
};

export async function GetExpenseController(
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
