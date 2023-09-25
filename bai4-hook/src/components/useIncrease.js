import { useState } from "react";
function useIncrease() {
    const [count, setCount] = useState(0);

    let increase = () => {
        console.log();
        setCount(pre => pre + 1)
    }

    return [count, increase]
}

export default useIncrease;
