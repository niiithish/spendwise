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
import { useEffect, useState } from "react";

const tableHead = ["id", "Title", "Category", "Name", "Date"];

export interface Expense {
  id: string;
  title: string;
  category: string;
  name: string;
  date: string;
}

const ExpenseList = () => {
  const [expense, setExpense] = useState<Expense[]>(() => {
    const savedExpense = localStorage.getItem("expenseList");
    return savedExpense ? JSON.parse(savedExpense) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenseList", JSON.stringify(expense));
  }, [expense]);

  const addExpense = (newExpense: Expense) => {
    setExpense((prev) => [...prev, newExpense]);
  };

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
                {tableHead.map((content) => {
                  return <TableHead key={content}>{content}</TableHead>;
                })}
              </TableRow>
            </TableHeader>
            <TableBody>
              {expense.map((content) => (
                <TableRow key={content.id}>
                  <TableCell>{content.id}</TableCell>
                  <TableCell>{content.title}</TableCell>
                  <TableCell>{content.category}</TableCell>
                  <TableCell>{content.name}</TableCell>
                  <TableCell>{content.date}</TableCell>
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
