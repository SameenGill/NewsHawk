import './App.css';

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';
import News from './components/News';

const App = ()=> {
  const pageSize=9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)

    return (
      <>
    <BrowserRouter>
    <Navbar/>
    <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress = {setProgress} apiKey={apiKey} key="generalk" pageSize={pageSize} country="us" category="general"/>} />
          <Route exact path="/business" element={<News setProgress = {setProgress} apiKey={apiKey} key="businessk" pageSize={pageSize} country="us" category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey={apiKey} key="entertainmentk" pageSize={pageSize} country="us" category="entertainment"/>} />
          <Route exact path="/health" element={<News setProgress = {setProgress} apiKey={apiKey} key="healthk" pageSize={pageSize} country="us" category="health"/>} />
          <Route exact path="/science" element={<News setProgress = {setProgress} apiKey={apiKey} key="sciencek" pageSize={pageSize} country="us" category="science"/>} />
          <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey={apiKey} key="sportsk" pageSize={pageSize} country="us" category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey={apiKey} key="technologyk" pageSize={pageSize} country="us" category="technology"/>} />
      </Routes>
    </BrowserRouter>
  
    </>
      
    )
  }

export default App;
