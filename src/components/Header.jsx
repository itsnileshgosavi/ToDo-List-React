import { useState } from 'react'

const Header = () => {
  return (
    <>
     <header className='w-full text-center'>
       <h1 className='text-3xl uppercase font-bold'>My TODOs</h1>
       <p className='text-sm my-3'>Add, Edit, Delete, Mark as Completed</p>
     </header>
    </>
  )
}

export default Header