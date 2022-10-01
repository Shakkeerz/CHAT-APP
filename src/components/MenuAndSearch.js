import React from 'react'

function MenuAndSearch() {
  return (
    <>
        <div className='flex items-center '>
            <span className='w-1/5'>Menu</span>
            <span className='w-4/5'>

{/* ONLY SHOW THE CLOSE BTN WHEN CLICK ON THE SEARCH BAR */}
                <div className='flex items-center relative '>
                <input type="text " placeholder='Search' className='p-2 outline-none rounded-md bg-slate-500 w-full'/>
                <span className='absolute right-2 opacity-60 hover:opacity-100 cursor-pointer'>X</span>
                </div>

            </span>
        </div>
    </>
  )
}

export default MenuAndSearch