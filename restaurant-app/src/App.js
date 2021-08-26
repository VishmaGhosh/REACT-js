//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Login from "./components/Login";

import Logout from "./components/Logout";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
         
          <Route path="/login"
          render={props=>(
            <Login {...props} />
          )}
          >
          </Route>

          <Route path="/logout">
            <Logout />
          </Route>
          {/*<Route exact path="/">
            <Home />
          </Route>*/}
          <Protected exact path="/details" component={RestaurantDetails} />
          <Protected exact path="/update/:id" component={RestaurantUpdate} />
          <Protected exact path="/search" component={RestaurantSearch} />
          <Protected exact path="/create" component={RestaurantCreate} />
          <Protected exact path="/list" component={RestaurantList} />
          <Protected exact path="/" component={Home} />
        </Router>

      </header>
    </div>
  );
}

export default App;
