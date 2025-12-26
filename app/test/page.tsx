"use client";

import { useCounterStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

const Test = () => {
  const { count } = useCounterStore();
  return <OtherComponent count={count} />;
};

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((set) => set.incremnet);
  const decrement = useCounterStore((set) => set.decremnet);
  return (
    <div>
      {count}
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default Test;
