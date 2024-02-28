import React from 'react';
import './style/normalaiz.css'
import './style/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Rankings' element='{<Rankings/>}'/>
          <Route path='/ConnectAwallet' element='{<ConnectAwallet/>}'/>
          <Route path='/SignUp' element='{<SignUp/>}'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
