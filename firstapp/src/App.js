import logo from './logo.svg';
import './App.css';
import Home from './home';
import Profile from './profile';
//import State from './state';
//import Hook from './test_hook.js';
//import Forms from './use_effect_hook'
//import Forms from './forms'
import Forms from './form_validation'
//import Listing from './listing'
//import API_call from './API_call'
//import UseRef from './use_Ref'
import User from './User'
import ErrorBound from './ErrorBound'
import BootstrapModal from './Bootstrap_modal'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import PureComp from './Pure_comp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100px" />
        {/*<BootstrapModal />
        <Router>
          <Link to="">Home</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Forms">Forms</Link>

          <Route exact path="/" component={Home} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Forms" component={Forms} />
        {/*<Home data={{name:'vishma'}} />{/*passing data to the home.js */}
        {/*<Home data={{name:'hulk'}} />*/}
        {/*<Profile text="Function profile component" data="function_data" />
        <Forms />
        <Listing />*/}
        {/*</Router>*/}
        {/*<ErrorBound><User /></ErrorBound>*/}
        <PureComp />

        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
