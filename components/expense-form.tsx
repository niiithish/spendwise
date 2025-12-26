import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Expense } from "./expense-list";
import { useState } from "react";

const ExpenseForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="category">Category</Label>
        <Input id="category" name="category" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="date">Date</Label>
        <Input id="date" name="date" type="date" required />
      </div>
    </div>
  );
};

interface ExpenseFormDialogProps {
  onAddExpense: (expense: Expense) => void;
}

const ExpenseFormDialog = ({ onAddExpense }: ExpenseFormDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      name: formData.get("name") as string,
      date: formData.get("date") as string,
    };

    onAddExpense(newExpense);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="cursor-pointer">
            <HugeiconsIcon icon={Add01Icon} />
            Add Expense
          </Button>
        }
      />
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Expense</DialogTitle>
            <DialogDescription>
              Add more expense here blah blah
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <ExpenseForm />
          </div>
          <div className="flex flex-col gap-2">
            <Button type="submit">Submit</Button>
            <DialogClose
              render={
                <Button variant="ghost" className="w-full">
                  Cancel
                </Button>
              }
            />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { ExpenseForm, ExpenseFormDialog };
