import logo from './logo.svg';
import './App.css';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Navlink
} from "react-router-dom";

import{Navbar} from './components/navBar/index';
import{SearchBar} from './components/search/index';
import { IkeaLogo } from './components/logo';
import {Icons} from './components/Icons';
import {Article1} from './components/article';
import homeImage1 from "./images/homepage1.webp";
import homeImage2 from "./images/homepage2.webp";
import homeImage3 from "./images/homepage3.webp";

function App() {
  return (
    <div className="App">
      <Router>
      <div class = "header">
        <div>
          <IkeaLogo/>
        </div>
        <div>
          <Navbar/>
        </div>
        <div>
          <SearchBar/>
        </div>

        <div>
          <Icons/>
        </div>
      </div>
      
        <Switch>
          <Route exact path="/">
            <div>
            <img className = "image1" src= {homeImage1}></img>
            </div>
            <div className = "image23">
              <div>
              <img src={homeImage2}></img>
              </div>
              <li className = "a">New</li>
              <li className = "b">FALLENHET</li>
              <li className = "c">Vase $7.99</li>
              <div>
              <img src={homeImage3}></img>
              </div>
              <div className = "G">
              <li className = "d">GRÖNÖ</li>
              <li className = "e">Table lamp</li>
              <li className = "f">$9.99</li>
              </div>
            </div>
          </Route>
          <Route exact path="/greenFriday">
            <Article1/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
