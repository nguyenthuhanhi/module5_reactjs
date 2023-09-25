import { useState } from "react";
export function useIncrease2() {
    const [count2, setCount2] = useState(0);

    let increase = () => {
        console.log();
        setCount2(pre => pre + 2)
    }

    return [count2, increase]
}


