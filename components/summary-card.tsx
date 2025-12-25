import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  MoneyReceive01Icon,
  MoneySendCircleIcon,
  SaveMoneyDollarIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const SummaryCard = () => {
  const dummyData = [
    {
      title: "Total Income",
      icons: MoneyReceive01Icon,
      value: "$3000",
      badgeValue: "2%",
    },
    {
      title: "Total Spent",
      icons: MoneySendCircleIcon,
      value: "$3000",
      badgeValue: "2%",
    },
    {
      title: "Total Saved",
      icons: SaveMoneyDollarIcon,
      value: "$3000",
      badgeValue: "2%",
    },
  ];
  return (
    <div className="flex justify-between gap-10">
      {dummyData.map(({ title, icons, value, badgeValue }) => {
        return (
          <Card key={title} className="w-full max-w-xs gap-2">
            <CardHeader className="flex flex-row justify-between text-sm font-medium text-muted-foreground">
              {title}
              <HugeiconsIcon className="text-primary" icon={icons} />
            </CardHeader>
            <CardContent className="font-bold text-2xl">{value}</CardContent>
            <CardFooter className="gap-2">
              <Badge>{badgeValue}</Badge> more than previous month
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default SummaryCard;
