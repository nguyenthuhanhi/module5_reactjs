
import {useState} from "react";
import useIncrease from "./useIncrease";
import {useIncrease2} from "./useIncreate2";


export function Counter(){

    const [count, setCount] = useIncrease(1);
    const [count2, setCount2] = useIncrease2(2);

    return (
        <div>
            Count: {count}
            <div>
                <button onClick={setCount}>ADD 1</button>
            </div>
            Count: {count2}
            <div>
                <button onClick={setCount2}>ADD 2</button>
            </div>
        </div>

    );

}
