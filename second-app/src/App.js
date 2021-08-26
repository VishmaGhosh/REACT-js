// import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import FocusInput from './components/FocusInput';
import FragmentDemo from './components/FragmentDemo';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero';
import RefsDemo from './components/RefsDemo';
import Table from './components/Table';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import ClickCounterTwo from './components/ClickCounterTwo'
import CounterTwo from './components/CounterTwo';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
// import InlineStyle from './components/InlineStyle';
// import LifecycleA from './components/LifecycleA';
// import ClassClick from './components/ClassClick';
// import Comp1 from './components/Comp1'
// import { Comp2 } from './components/Comp2';
// import Comp3 from './components/Comp3';
// import EventBind from './components/EventBind';
// import FuncClick from './components/FuncClick';
// import NameList from './components/NameList';
//import ParentComponent from './ParentComponent';
//import UserGreeting from './UserGreeting';
// import Stylesheet from './components/Stylesheet'
// import StylessheetModule from './components/StylessheetModule';

function App() {
  return (
    <div className="App">
      {/* <Comp1 /> */}
      {/* <Comp2 name="Diana" heroName="Wonder Woman" /> */}
      {/* <Comp3 name="Bruce" heroName="Batman" /> */}
      {/* <FuncClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet  primary={true} />
        <InlineStyle />
        <StylessheetModule /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo />
        <Table /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Hulk" />
        <Hero heroName="Iron man" />
        <Hero heroName="joker" />
        </ErrorBoundary> */}
      {/* <ClickCounter name="Vishma" />
        <HoverCounter /> */}
      {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedIn) => isLoggedIn ? "vishma" : "Guest"} /> */}
      {/* <CounterTwo 
       render={(count, countIncrement) => (
       <ClickCounterTwo count={count} countIncrement={countIncrement} />)} />
       <CounterTwo 
       render={(count, countIncrement) => (
       <HoverCounterTwo count={count} countIncrement={countIncrement} />)} /> */}

       <PostList />
       {/* <PostForm /> */}
    </div>
  );
}

export default App;
