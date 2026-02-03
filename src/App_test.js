import logo from './logo.svg';
import './App.css';
import ClassCounter from './componentstest/ClassCounter';
import HookCounter from './componentstest/HookCounter';
import HookCounterTwo from './componentstest/HookCounterTwo';
import HookCounterThree from './componentstest/HookCounterThree';
import HookCounterFour from './componentstest/HookCounterFour';
import UseEffectCounter from './componentstest/UseEffectCounter';
import HookMouse from './componentstest/HookMouse';
import MouseContainer from './componentstest/MouseContainer';
import DataFetching from './componentstest/DataFetching';
// import ComponentC from './components/ComponentC';
import React, { useReducer } from 'react';  
import CounterOne from './componentstest/CounterOne';
import CounterTwo from './componentstest/CounterTwo';
import CounterThree from './componentstest/CounterThree';
import ComponentA from './componentstest/global_state/ComponentA';
import ComponentB from './componentstest/global_state/ComponentB';
import ComponentC from './componentstest/global_state/ComponentC';

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
