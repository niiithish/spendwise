"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./ui/table";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ExpenseFormDialog } from "./expense-form";
import { create } from "zustand";

export interface Expense {
  id: string;
  title: string;
  category: string;
  name: string;
  date: string;
}

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (newExpense: Expense) => void;
}

export const useExpenseStore = create<ExpenseStore>((set) => ({
  expenses: [],
  addExpense: (newExpense) =>
    set((state) => ({ expenses: [...state.expenses, newExpense] })),
}));

const tableHead = ["id", "Title", "Category", "Name", "Date"];

const ExpenseList = () => {
  const expenses = useExpenseStore((state) => state.expenses);
  const addExpense = useExpenseStore((state) => state.addExpense);

  return (
    <>
      <Card>
        <CardHeader className="justify-end">
          <ExpenseFormDialog onAddExpense={addExpense} />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {tableHead.map((content) => (
                  <TableHead key={content}>{content}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{expense.id}</TableCell>
                  <TableCell>{expense.title}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>{expense.name}</TableCell>
                  <TableCell>{expense.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ExpenseList;