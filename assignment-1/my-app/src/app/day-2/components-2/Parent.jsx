import { useCallback, useState } from "react";
import Child from "@/app/day-2/components-2/Child";

export default function Parent() {
    const [count, setCount] = useState(0);

    const incrementCount = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);
    const resetCount = () => {
        setCount(0);
    };
    return (
        <div>
            <h1>Parent component</h1>
            <h2>Current count: {count}</h2>
            <Child count={count} 
            incrementCount={incrementCount} 
            resetCount={resetCount} />
        </div>
    )
}