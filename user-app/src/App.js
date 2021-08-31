
import './App.css';
import UserList from './components/UserList';
import {useEffect,useState} from 'react'
import axios from "axios"
import {BrowserRouter as Router , Link,Route} from 'react-router-dom'
import UserDitails from './components/UserDitails';


function App() {
  const [user, setUser] = useState([])
  useEffect(()=>{
    axios.get(`https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json`)
    .then(res => {
        setUser(res.data);
        // console.log(res.data);
    })
},[])



  return (
    <div className="App">
      <Router>
      <Link to="/"></Link>

      <Route exact path="/">
      <UserList user={user} />
      </Route>
      <Route exact path="/ditails/:id">
        <UserDitails user={user}/>
      </Route>

      </Router>
    </div>
  );
}

export default App;
