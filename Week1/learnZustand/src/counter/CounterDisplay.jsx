import useGlobalStore from "../store/store";

const CounterDisplay = () => {

  const count = useGlobalStore(state => state.count);

  console.log("counterDisplay")

  return <p className="text-4xl">{count}</p>;
}

export default CounterDisplay