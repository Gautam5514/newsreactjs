
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize= 5;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
    
    
      <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <News setProgress={this.setProgress}  key="general" apiKey={this.apiKey} pageSize={this.pageSize} country="in"   category="general"/>
      </div>
    
    )
  }
}

