import { useState } from "react";
                                             //Hooks always start with use (that’s a React rule).
type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}

export const useCounter = () => {

    const [state, setState] = useState<CounterState>({     //useState is a React Hook that lets your hook (or component) remember values between renders.
        count: 0,                         //You’re telling TypeScript that this state will have the shape of CounterState.
        lastAction: "",                  //setState is a function to update that state later.
        time: "",
    })

    const getCurrentTime = () => new Date().toLocaleTimeString();

    const increase = () => {
        setState({
            count: state.count + 1,
            lastAction: "Increase",
            time: getCurrentTime(),
        });
    };

    const decrease = () => {
        setState({
            count: state.count -1,
            lastAction: "Decrease",
            time: getCurrentTime(),
        });
    };

    const reset = () => {
        setState({
            count: 0,
            lastAction: "Reset",
            time: getCurrentTime(),
        });
    };

    return {
        count: state.count,
        lastAction: state.lastAction,
        time: state.time,
        increase,
        decrease,
        reset,
    };             //με οτι βαλουμε στο return μπορούμε να δουλέψουμε εξωτερικα δεν μπορούμε να επέμβουμε μεσα στο hook

};