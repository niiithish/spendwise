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

const tableHead = ["id", "Title", "Category", "Name", "Date", "Action"];
const tableContent = [
  { id: "1", title: "Milk", category: "Essential", name: "A Milk", date: "1" },
  {
    id: "2",
    title: "Bread",
    category: "Essential",
    name: "A Bread",
    date: "1",
  },
  { id: "3", title: "Chips", category: "Junk", name: "A Chips", date: "1" },
];

const ExpenseList = () => {
  return (
    <>
      <Card>
        <CardHeader className="justify-end">
          <ExpenseFormDialog />
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
              {tableContent.map((content) => (
                <TableRow key={content.id}>
                  <TableCell>{content.id}</TableCell>
                  <TableCell>{content.title}</TableCell>
                  <TableCell>{content.category}</TableCell>
                  <TableCell>{content.name}</TableCell>
                  <TableCell>{content.date}</TableCell>
                  <TableCell></TableCell>
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
