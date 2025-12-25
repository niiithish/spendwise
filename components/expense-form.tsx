import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
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

const ExpenseForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <Label>Title</Label>
        <Input></Input>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Category</Label>
        <Input></Input>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Name</Label>
        <Input></Input>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Date</Label>
        <Input></Input>
      </div>
    </div>
  );
};

const ExpenseFormDialog = () => {
  {
    return (
      <Dialog>
        <form>
          <DialogTrigger>
            <Button className="cursor-pointer">
              <HugeiconsIcon icon={Add01Icon} />
              Add Expense
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Expense</DialogTitle>
              <DialogDescription>
                Add more expense here blah blah
              </DialogDescription>
            </DialogHeader>
            <ExpenseForm />
            <div className="flex flex-col gap-2">
              <Button>Sumbit</Button>
              <DialogClose>
                <Button variant="ghost" className="w-full">
                  Cancel
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    );
  }
};
export { ExpenseForm, ExpenseFormDialog };
