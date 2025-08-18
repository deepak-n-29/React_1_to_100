import useCounterStore from '../store/store'

const CounterDisplay = () => {
    const count = useCounterStore(state => state.count) // getter 
    console.log("CounterDisplay Rendered");
    return <p className='text-4xl font-bold'> {count} </p>
    
}

export default CounterDisplay