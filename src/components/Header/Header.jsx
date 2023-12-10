import React, { useState } from 'react'
import ThemeBtn from './ThemeBtn'
import { Search } from '@mui/icons-material'
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <>
      <div className="absolute z-20 w-full h-14 md:h-16 flex items-center justify-between px-4 pl-2 sm:px-12 sm:pl-6 py-2 md:py-4 
      bg-white dark:bg-neutral-900 backdrop-filter bg-clip-padding backdrop-blur-md bg-opacity-60 dark:bg-opacity-80 ">
        <Link to='/'>
          <div className="text-xl md:text-2xl font-semibold dark:text-white flex items-center justify-center">
            <img src={Logo}/>zy
            
          </div>
        </Link>

        <div className="flex justify-end items-center w-2/4">
            <form className="flex items-center justify-end h-7 md:h-8 md:w-4/6"
            onSubmit={handleSubmit}>
              <input type="text" placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className='h-full md:w-5/6 px-4 md:px-4 text-xs md:text-sm text-neutral-800 dark:text-white align-middle 
              rounded-3xl rounded-r-none border-[1px] border-neutral-500 focus:outline-none bg-transparent'/>

              <button className="bg-neutral-600 h-full w-11 md:w-14 rounded-3xl rounded-l-none text-white border-[1px] 
              border-neutral-500 border-l-0">
                <Search/>
              </button>
            </form>

          <ThemeBtn/>
        </div>
      </div>
    </>
  )
}

export default Header