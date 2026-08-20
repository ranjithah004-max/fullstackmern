import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from './componets/User'//for import components
import State from './componets/State'
import Form from './componets/Form'
import Effect from './componets/Effect'

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact"
import Navbar from './pages/Navbar'

const App=()=>{
  let name ="ranji";
  return (
    <>

    <Navbar />
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
       <Route path="/service" element={<Service/>}/> 
        <Route path="/contact" element={<Contact/>}/>
         <Route path="/form" element={<Form/>}/>
          <Route path="/effect" element={<Effect/>}/>
           <Route path="/state" element={<State/>}/>
    <Route path="/user" element={<User name="ranji" dept ="Ece"/>}/>
    </Routes>
    <Effect/>
    <Form/>
    <Effect/>
    <User name="soo"  dept="cse"/>
    <h1>Hello {name}</h1>
    <State/>
    </>
    //<div>App</div>
  )
}
export default App