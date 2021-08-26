import './App.css';
import React, { useState } from 'react';
import ParentComponent from './components/ParentComponent';
import ComponentC from './components/ComponentC';
import ComponentF from './components/ComponentE';
//import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
// import CounterThree from './components/CounterThree';
//import DataFetchingOne from './components/DataFetchingOne';
//import DataFetchingTwo from './components/DataFetchingTwo';
//import Home from "./Home"
//import UncontrolComp from './UncontrolComp';
//import ControlComp from './ControlComp';
//import UploadFile from './UploadFile'
//import ClassComponentOne from './components/ClassComponentOne'
//import HookCounterOne from './components/HookCounterOne'
// import HookMouse from './components/HookMouse'
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalFuncComponent from './components/IntervalFuncComponent';
//import DataFetching from './components/DataFetching';

export const UserContext = React.createContext()
export const SalaryContext = React.createContext()

const App = () => {
  {/*const [count,setCount]=useState(0)
  const [data,setData]=useState(100)*/}


  return (
    <div className="App">

      {/*Memo with React {count}
      <Home data={data} />
  <button onClick={()=>setCount(count+1)}>Count</button>*/}
      {/*<UncontrolComp />*/}
      {/*<ControlComp />*/}
      {/*<UploadFile />*/}
      {/*<ClassComponentOne />*/}
      {/*<HookCounterOne />*/}
      {/* <HookMouse />
      <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalFuncComponent /> */}
      {/*<DataFetching />*/}

      <UserContext.Provider value={"Vishma"}>
        <SalaryContext.Provider value={"20000"}>
          <ComponentC />
          {/* <ComponentF /> */}
        </SalaryContext.Provider>
      </UserContext.Provider>

      {/*<CounterOne />*/}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/*<DataFetchingOne />
    <DataFetchingTwo />*/}

      {/* <ParentComponent /> */}


    </div>

  );
};

export default App;
