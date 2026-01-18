import React from 'react';
import { Route, Router,Routes } from 'react-router';
import Homepage from "./pages/homepage";
import Createpage from "./pages/createpage";
import Notepage from "./pages/notepage";
import toast from 'react-hot-toast';

const App = () => {
  return (
   
    <div data-theme="forest">
      <Routes>
         <Route path="/" element={<Homepage/>} />
         <Route path="/create" element={<Createpage/>} />
         <Route path="/note/:id" element={<Notepage/>} />
      </Routes>
    </div>
  )
}

export default App
