import React from 'react'
import { FaWheelchair } from "react-icons/fa6";

function Home() {
  let IconStyle ={fontSize:'2em'}
  return (
    <div className='flex w-full h-screen'>
      <div className='w-170 h-screen justify-center'>

          <div className='ml-10 mt-10 w-150 h-35 bg-red-600 rounded-2xl text-amber-50'>
            <h1 className='py-2 px-10 text-2xl font-bold'>Welcome Fitness user</h1>
            <h2 className='py-1 px-10 text-sl'>Today is Monday, January 12. You have 2 adaptive workouts scheduled, your wellness routine is due in 3 days, and you are 2,000 steps away from your daily target. Keep going!</h2>
          </div>

          <div className='py-2 px-2 ml-10 flex mt-5 w-150 h-35 rounded-2xl overflow-hidden gap-2'>
            <div className='w-48 bg-zinc-50 px-10 py-9 rounded-2xl drop-shadow-2xl'>
            <FaWheelchair />
            <h1 className='whitespace-nowrap'>Steps Count</h1>
            <h2>1022</h2>
            </div>

            <div className='w-49 bg-zinc-50 px-10 py-9 rounded-2xl drop-shadow-2xl'>
            <FaWheelchair />
            <h1 className='whitespace-nowrap'>Steps Count</h1>
            <h2>1022</h2>
            </div>

            <div className='w-49 bg-zinc-50 px-10 py-9 rounded-2xl drop-shadow-2xl'>
            <FaWheelchair />
            <h1 className='whitespace-nowrap'>Steps Count</h1>
            <h2>1022</h2>
            </div>

          </div>

          <div className='flex ml-10 mt-3 w-150 h-70  rounded-2xl overflow-hidden gap-2'>
            <div className='py-2 px-2 w-100 h-65 rounded-2xl drop-shadow-2xl'>
              <div className='h-25 bg-zinc-50 rounded-2xl'>
              <h1 className='ml-10'>Welness Forecast</h1>
              <div className='mt-2 flex gap-2'>
              <h1 className=' ml-10 h-7 w-7 rounded-full bg-red-200'>10</h1>
              <h1 className=' h-7 w-7 rounded-full bg-red-200'>11</h1>
              <h1 className=' h-7 w-7 rounded-full bg-red-200'>12</h1>
              <h1 className=' h-7 w-7 rounded-full bg-red-200'>13</h1>
              <h1 className=' h-7 w-7 rounded-full bg-red-200'>14</h1>
              <h1 className=' h-7 w-7 rounded-full bg-red-200'>15</h1>
              </div>
              </div>

              <div className='h-45 bg-zinc-50 rounded-2xl'>
                <div className='mt-2 flex gap-5'>
                  <h1 className='ml-5 mt-5 text-xl'>Nutriton Intake</h1>
                  <h2 className='mt-5 ml-3'>Total</h2>
                  <h2 className='mt-5'>Daily goal</h2>
                  <h2 className='mt-5'>Intake</h2>
                </div>
                <div className='mt-5 ml-5 flex gap-5'>
                  <h1>Calorie Consumption</h1>
                  <h2 className='ml-2'>300</h2>
                  <h2 className='ml-5'>200</h2>
                  <h2 className='ml-7'>400</h2>
                </div>
                <div className='mt-1 ml-5 flex gap-5'>
                  <h1>Calorie Consumption</h1>
                  <h2 className='ml-2'>300</h2>
                  <h2 className='ml-5'>200</h2>
                  <h2 className='ml-7'>400</h2>
                </div>
                <div className='mt-1 ml-5 flex gap-5'>
                  <h1>Calorie Consumption</h1>
                  <h2 className='ml-2'>300</h2>
                  <h2 className='ml-5'>200</h2>
                  <h2 className='ml-7'>400</h2>
                </div>
              </div>
            </div>

            <div className='px-2 py-2 w-50 h-70 bg-zinc-50 rounded-md overflow-hidden drop-shadow-2xl'>
            <h1 className='mt-3 ml-3 font-semibold text-xl'>Rest analysis</h1>
            <div className='ml-3 mt-10 flex gap-3'>
              <div>
              <FaWheelchair style={IconStyle} />
              </div>
              <div>
                <h1 className='text-sm'>Deep sleep cycles</h1>
                <h1>22%</h1>
              </div>
            </div>
            <div className='ml-3 mt-2 flex gap-3'>
              <div>
              <FaWheelchair style={IconStyle} />
              </div>
              <div>
                <h1 className='text-sm'>Deep sleep cycles</h1>
                <h1>22%</h1>
              </div>
            </div>
            <div className='ml-3 mt-2 flex gap-3'>
              <div>
              <FaWheelchair style={IconStyle} />
              </div>
              <div>
                <h1 className='text-sm'>Deep sleep cycles</h1>
                <h1>22%</h1>
              </div>
            </div>
            </div>

          </div>

      </div>

      <div className='py-2 w-92 h-screen bg-zinc-50'>
        <div className='px-10 py-5 h-60 bg-red-300 rounded-md'>
        <img className='ml-15 h-50 w-40 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1S8vFZZS-OpFhr98tYKxZSLZ1W9dwON4aiKOGxu5yHGRU2rBORirgO8MK1MEZ_o_1ls&usqp=CAU" alt="" />
        </div>
        <div className='flex mt-5 gap-4'>
          <div>
          <h1 className='ml-10  h-7 w-7 rounded-full bg-zinc-50'>11</h1>
          <h3 className='ml-6 text-xs'>Motivation</h3>
          </div>
          <div>
            <h1 className='ml-10  h-7 w-7 rounded-full bg-zinc-50'>12</h1>
            <h3 className='text-xs'>Calorie Count</h3>
          </div>
          <div>
            <h1 className='ml-10  h-7 w-7 rounded-full bg-red-300'>13</h1>
            <h3 className='text-xs'>Nutrition</h3>
          </div>
          <div>
            <h1 className='ml-10  h-7 w-7 rounded-full bg-zinc-50'>14</h1>
            <h3 className=' text-xs'>Steps Count</h3>
          </div>
        </div>
        <div className='h-65'>
          <h1 className='ml-10 mt-10 text-xl font-bold'>Next Week Routine</h1>
          <div className='ml-10 mt-10 flex gap-8'>
          <FaWheelchair style={IconStyle} />
          <h1>Adaptevely Yoga Session</h1>
          </div>
          <div className='ml-10 mt-5 flex gap-8'>
          <FaWheelchair style={IconStyle} />
          <h1>Mindfull meditation session</h1>
          </div>
          <div className='ml-10 mt-5 flex gap-8'>
          <FaWheelchair style={IconStyle} />
          <h1>flexibility exercises</h1>
          </div>
          <div className='mt-10 ml-10 w-70 bg-zinc-100 border-2 rounded-b-md'>
            <button className='flex justify-self-center'>Update deatails</button>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Home