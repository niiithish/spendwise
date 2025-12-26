"use client";

import { create } from "zustand";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

/**
 * 1. THE STORE (The Global Box)
 * We define what data we have (count) and what we can do to it (inc, dec).
 */
interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}));

/**
 * 2. COMPONENT A: The Display
 * This component ONLY cares about the 'count' value.
 */
const CounterDisplay = () => {
    const count = useCounterStore((state) => state.count);

    return (
        <div className="text-6xl font-bold text-center py-8 tabular-nums">
            {count}
        </div>
    );
};

/**
 * 3. COMPONENT B: The Controls
 * This component ONLY cares about the 'increment' and 'decrement' functions.
 */
const CounterControls = () => {
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);
    const reset = useCounterStore((state) => state.reset);

    return (
        <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={decrement}>- Decrease</Button>
            <Button variant="destructive" onClick={reset}>Reset</Button>
            <Button onClick={increment}>+ Increase</Button>
        </div>
    );
};

/**
 * 4. THE MAIN COMPONENT
 * Notice how we don't pass any props between Display and Controls!
 * They both talk to the "Box" (Store) independently.
 */
export default function SimpleCounter() {
    return (
        <Card className="w-full max-w-md mx-auto mt-10">
            <CardHeader>
                <CardTitle className="text-center">Zustand Counter Demo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <CounterDisplay />
                <CounterControls />
                <p className="text-xs text-muted-foreground text-center">
                    Notice: No props are being passed between these components.
                    Everything is managed by the store!
                </p>
            </CardContent>
        </Card>
    );
}
