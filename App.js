import React from "react"
// import Home from "./Home"
import './App.css';
import Mounting from "./Mounting"
import Updating from "./Updating"
import Unmounting from "./Unmounting"
import Nav from "./Nav"
import {BrowserRouter, Switch, Route} from "react-router-dom"


 
function App() {
  return (
    <div className="App">

      <h2>Component Life Cycle</h2>
      
      <div className="Div">
        <BrowserRouter>
        
           <Nav></Nav>
        <Switch>

          
            
            <Route exact path="/" component={Mounting}/>
            <Route exact path="/updating" component={Updating}/>
            <Route exact path="/unmounting" component={Unmounting}/>
        </Switch>
        </BrowserRouter>
        </div>
     </div>
  );
}

export default App;