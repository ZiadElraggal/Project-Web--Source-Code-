import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import React from 'react' 
import Navbar from './components/Navbar'
import {Home,About,Projects,Expereinces,Contact, WIP, Barnes, Marine} from './pages'
const App = () => {
  return (
    <main className='h-[100vh]'>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/experiences" element={<Expereinces/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/Barnes" element={<Barnes/>}/>
                <Route path="/Marine" element={<Marine/>}/>
                <Route path="/WIP" element={<WIP/>}/>
            </Routes>
        </Router>
    </main>
  )
}

export default App