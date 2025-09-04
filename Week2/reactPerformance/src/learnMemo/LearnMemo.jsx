import React, { useMemo, useRef } from "react";

const Child = React.memo(
    ({ value = "Bro", obj }) => {
        console.log("Child rendered");
        return (
            <div className="border border-red-500 p-4">
                Value in Child: {value}
            </div>
        );
    },
    (prevProps, nextProps) => {
        return (
            prevProps.obj.firstName === nextProps.obj.firstName &&
            prevProps.obj.age === nextProps.obj.age
        );
    }
);

// const MemoizedChild = React.memo(Child);

function LearnMemo() {
    const [count, setCount] = React.useState(0);
    // const a = [4, 5, 1, 2, 3];

    // const a = useMemo(() => {
    //     return [4, 5, 1, 2, 3];
    // }, []);

    const a = useRef([4, 5, 1, 2, 3]);

    const expensiveComputation = useMemo(() => {
        console.log("doing computation");
        return a.current.reduce((acc, cur) => acc + cur, 0);
    }, [a]);

    console.log(expensiveComputation);

    console.log("Parent rendered");

    const obj = {
        firstName: "Anuj",
        age: 28,
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center gap-4 border p-8 rounded-sm">
                <button
                    className="bg-teal-600 px-4 py-2 rounded-sm"
                    onClick={() => setCount(count + 1)}
                >
                    Increment in Parent: {count}
                </button>
                <Child value="Hi Anuj" obj={obj} />
            </div>
        </div>
    );
}

export default LearnMemo;
