import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import UseEffectCounter from './components/UseEffectCounter';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import DataFetching from './components/DataFetching';
// import ComponentC from './components/ComponentC';
import React, { useReducer } from 'react';  
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentA from './components/global_state/ComponentA';
import ComponentB from './components/global_state/ComponentB';
import ComponentC from './components/global_state/ComponentC';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
export const CountContext = React.createContext()   // to provide the values

const initialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
      <CountContext.Provider
        value = {{countState: count, countDispatch : dispatch}}>
        <div className='App'>
            Count - {count}
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </div>

      </CountContext.Provider>

    // </div>
  );
}

export default App;


    // <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <UseEffectCounter /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value = {'Tanya'}>
        <ChannelContext.Provider value ={'Code'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
