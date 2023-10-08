import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HelloWorld from "./components/HelloWorld/HelloWorld";
import {CounterContainer} from "./containers/counter/CounterContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
            <Route path="/" element={<HelloWorld/>}/>
            <Route path="/counter" element={<CounterContainer/>} />
            <Route path="*">404</Route>
        </Routes>
      </header>
    </div>
  )
}

export default App
