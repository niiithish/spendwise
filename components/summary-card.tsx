import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  MoneyReceive01Icon,
  MoneySendCircleIcon,
  SaveMoneyDollarIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const SummaryCard = () => {
  return (
    <div className="flex justify-between gap-10">
      <Card className="w-full max-w-xs gap-2">
        <CardHeader className="flex flex-row justify-between text-sm font-medium text-muted-foreground">
          Total Income
          <HugeiconsIcon className="text-primary" icon={MoneyReceive01Icon} />
        </CardHeader>
        <CardContent className="font-bold text-2xl">$3000</CardContent>
        <CardFooter className="gap-2">
          <Badge>2%</Badge> more than previous month
        </CardFooter>
      </Card>
      <Card className="w-full max-w-xs gap-2">
        <CardHeader className="flex flex-row justify-between text-sm font-medium text-muted-foreground">
          Total Spent
          <HugeiconsIcon className="text-primary" icon={MoneySendCircleIcon} />
        </CardHeader>
        <CardContent className="font-bold text-2xl">$3000</CardContent>
        <CardFooter className="gap-2">
          <Badge>2%</Badge> more than previous month
        </CardFooter>
      </Card>
      <Card className="w-full max-w-xs gap-2">
        <CardHeader className="flex flex-row justify-between text-sm font-medium text-muted-foreground">
          Total Savings
          <HugeiconsIcon className="text-primary" icon={SaveMoneyDollarIcon} />
        </CardHeader>
        <CardContent className="font-bold text-2xl">$3000</CardContent>
        <CardFooter className="gap-2">
          <Badge>2%</Badge> more than previous month
        </CardFooter>
      </Card>
    </div>
  );
};

export default SummaryCard;
