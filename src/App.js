
import './App.css';
import React  from 'react'
import {Route ,Switch} from 'react-router-dom' 
import Home from  './components/Home'
import Login from  './components/Login'
import Contact from  './components/Contact'
import About from  './components/About'
import Error from './components/Error'
import MyNavbar from './components/MyNavbar'
// import { withScriptjs } from "react-google-maps";
// import OpenModal from './components/OpenModal'
import Signup from './components/Signup'

import Dashboard from './components/Dashboard';
import Googlemaps from './components/Googlemaps';
// import Map from './components/Map'


// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Header from './components/Header'

const App = () => {
  // const MapLoader = withScriptjs(Map);

  return(
    <div>
    <MyNavbar/>
    {/* <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDiKmRh2vEg2hiV1ZIVeyNlxPjVegpChvE"
      loadingElement={<div style={{ height: `100%` }} />}
    /> */}
   
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/googlemap' component={Googlemaps}/>
      {/* <Route exact path='/model' component={OpenModal}/> */}
      <Route exact path="/signup" component={Signup}/>
      {/* <Route exact path="/tcmodel" component={TCModel}/> */}
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route component={Error}/>
    </Switch>
    </div>
  )
}

export default App;
