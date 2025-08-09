import React from 'react'
import { useSelector } from 'react-redux'

const CounterDisplay = () => {
    const count = useSelector(state => state.counter.count) // getter 

    return <p className='text-4xl font-bold'> {count} </p>
    
}

export default CounterDisplay