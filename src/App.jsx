import React, { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed, Header, Sidebar, SearchFeed, VideoFeed, ChannelFeed } from "./components"

function App() {
  const [category, setCategory] = useState('New');
  
  return (
    <>
      <BrowserRouter>
        <div className='h-screen w-full dark:bg-neutral-900 flex flex-col relative'>
          <Header />
          <Sidebar category={category} setCategory={setCategory}/>
          <Routes>
            <Route path="/feed" element={<Feed category={category}/>} />
            <Route path="/video/:id" element={<VideoFeed/>}/>
            <Route path="/channel/:id" element={<ChannelFeed/>} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>          
        </div>
      </BrowserRouter>
    </>
  )
}

export default App