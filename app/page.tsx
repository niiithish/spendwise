import ExpenseList from "@/components/expense-list";
import SummaryCard from "@/components/summary-card";

export default function Page() {
  return (
    <div className="flex flex-col p-10 gap-12">
      <SummaryCard />
      <ExpenseList />
    </div>
  );
}
