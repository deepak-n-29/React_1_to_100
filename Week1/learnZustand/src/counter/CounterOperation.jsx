import useCounterStore from '../store/store';

const CounterOperation = () => {

    console.log("CounterOperation Rendered");
    const increment = useCounterStore(state => state.increment);
    const decrement = useCounterStore(state => state.decrement);
    const reset = useCounterStore(state => state.reset);
    const incrementAsync = useCounterStore(state => state.incrementAsync);

  return (
    <div className="flex gap-6 text-black text-4xl">
        <button onClick={decrement} className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 ">
            -
        </button>
        <button onClick={increment} className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 ">
            +
        </button>
        <button onClick={reset} className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 ">
            RESET
        </button>
        <button onClick={() => incrementAsync(3)} className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 ">
            +++
        </button>
    </div>
  )
}

export default CounterOperation