import React from 'react'

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a className='logo' href="#">
            <div className="sh m-0 p-0 text-[2.2rem] font-bold">SH</div>
            <div className="name mt-[-5px] p-0 text-[2.5rem] font-bold lg:mt-[-5px] lg:text-[2.5rem]">SABBIR</div>
          </a>
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header
