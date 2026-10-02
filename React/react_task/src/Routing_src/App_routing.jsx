/*

Create React App doesn't include page routing.

React Router is the most popular solution.

Add React Router
To add React Router in your application, run this in the terminal from the root directory 
of the application:

npm i -D react-router-dom 

   Roting : BrowsRouter, Routes, Route 
   Navbar : NavLink , Link
   redirect : useNavigate() / redirect()

*/


import React from 'react'
import Home from './website/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './website/component/Header'
import Footer from './website/component/Footer'
import About from './website/pages/About'
import Contact from './website/pages/Contact'

function App_routing() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<><Header title="Home Page"/><Home/><Footer/></>}></Route>
                <Route path="/about" element={<><Header title="About Page"/><About/><Footer/></>}></Route>
                <Route path="/contact" element={<><Header title="Contact Page"/><Contact/><Footer/></>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App_routing