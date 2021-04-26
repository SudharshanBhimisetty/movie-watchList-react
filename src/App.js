import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WatchList from './Components/WatchList'
import Watched from './Components/Watched'
import Add from './Components/Add'
import Header from './Components/Header'

import  GlobalProvider  from './Contexts/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Router>
          <Header />

          <Route exact path="/">
            <WatchList />
          </Route>

          
          <Route path="/watched">
            <Watched />
          </Route>
          
          <Route path="/add">
            <Add />
          </Route>
      </Router>
      </GlobalProvider>
  )
}

export default App
