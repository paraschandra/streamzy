import React, { useState, useEffect } from 'react'
import { DarkMode, LightMode} from '@mui/icons-material/';

const ThemeBtn = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme])

  const handleChange = (e) => {
    const status = e.currentTarget.checked
    if (status) {
        setTheme('dark')
    } else {
        setTheme('light')
    }
  }
  return (
    <>  
      <label className='ml-2 md:ml-8 cursor-pointer'>
        <input type="checkbox" value="" 
        className="sr-only" 
        onChange={handleChange} checked={theme==="dark"}/> 

        <div className="h-6 w-6 flex items-center">
          {theme === 'dark' ? <LightMode className='text-white'/> : <DarkMode/>}
        </div>
      </label> 
    </>
  )
}

export default ThemeBtn