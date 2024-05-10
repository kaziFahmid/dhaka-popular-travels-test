import React from 'react'
import { FaRegBell } from "react-icons/fa";
const Header = () => {

    const navLinks=['Dashboard','Master Price','Custom Price','Calendar','Reports']
  return (
  <>
  {/* first header */}
  <div className="navbar bg-neutral text-neutral-content">
    <div className='container max-w-[1280px] mx-auto  flex justify-between'>
<ul className='flex justify-start items-center gap-8'>
    {navLinks?.map((item,index)=><li key={index} className='text-sm font-semibold'>{item}</li>)}
</ul>

<div className='flex justify-end items-center gap-4'>
<FaRegBell className='text-xl' />
<div className="avatar">
  <div className="w-9 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
</div>
    </div>
 <div>

 </div>
</div>

  {/* master  2nd header*/}
  
  <div className=' flex justify-between bg-white shadow-md'>
    <div className='container max-w-[1280px] mx-auto '>
    <h2 className='font-bold text-2xl'>Master Price</h2>
    </div>

  </div>
  
  </>
  )
}

export default Header