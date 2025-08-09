import React from 'react'
import { COUNTER_ACTION_TYPES } from './counterRedux';
import { useDispatch } from 'react-redux';

const CounterOperation = () => {

    const dispatch = useDispatch(); // setter

  return (
    <div className="flex gap-6 text-black text-4xl">
        <button onClick={
            () => dispatch({type: COUNTER_ACTION_TYPES.DECREMENT,
                payload: {name: 'Deepak', arr: [1,2]} // optional payload
         })} className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 ">
            -
        </button>
        <button onClick={()=> dispatch({type: COUNTER_ACTION_TYPES.INCREMENT })} className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 ">
            +
        </button>
        <button onClick={()=> dispatch({type: COUNTER_ACTION_TYPES.RESET })} className="bg-yellow-300 px-4 py-2 rounded-sm cursor-pointer transition active:bg-yellow-500 hover:bg-yellow-200 ">
            RESET
        </button>
    </div>
  )
}

export default CounterOperation