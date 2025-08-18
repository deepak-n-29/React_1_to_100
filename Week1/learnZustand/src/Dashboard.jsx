import React from 'react'
import { Link } from 'react-router'

const Dashboard = () => {
  return (
    <div className="flex items-center min-h-screen justify-center">
          <div className="flex flex-col gap-12 bg-gray-800 min-w-md min-h-40 items-center justify-center p-6 rounded-lg">
            <h2 className='text-4xl'>Zustand Examples</h2> 
            <Link className="link-button" to={"/counter"}>Go to Counter</Link>
            <Link className="link-button" to={"/shopping"}>Go to Shopping</Link>
        </div>
    </div>
  )
}

export default Dashboard