import React, { useState } from 'react'
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const pageSize= 5;
  const apiKey = process.env.REACT_APP_NEWS_API

  
  const [progress, setProgress] = useState(0)

    return (
    
    
      <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
          <News setProgress={setProgress}  key="general" apiKey={apiKey} pageSize={pageSize} country="in"   category="general"/>
      </div>
    
    )
  
}

export default App;