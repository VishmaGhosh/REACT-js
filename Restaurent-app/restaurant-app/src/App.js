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
// import Protected from "./components/Protected";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>

          <Route path="/login"
            render={props => (
              <Login {...props} />
            )}
          >
          </Route>

          <Route path="/logout">
            <Logout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/list">
            <RestaurantList />
          </Route>
          <Route exact path="/update/:id">
            <RestaurantUpdate />
          </Route>
          <Route exact path="/search">
            <RestaurantSearch />
          </Route>
          <Route exact path="/create">
            <RestaurantCreate />
          </Route>
          <Route exact path="/detailes">
            <RestaurantDetails />
          </Route>
          {/* <exact path="/details" component={RestaurantDetails} /> */}
          {/* <exact path="/update/:id" component={RestaurantUpdate} /> */}
          {/* <exact path="/search" component={RestaurantSearch} /> */}
          {/* <exact path="/create" component={RestaurantCreate} /> */}
          {/* <exact path="/list" component={RestaurantList} /> */}
          {/* <exact path="/" component={Home} /> */}
        </Router>
      </header>

    </div>
  );
}

export default App;
