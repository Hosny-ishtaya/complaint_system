
import './App.css';
import React,{Component}from 'react';
import Navbar from'./component/Navbar';
import Home from'./component/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Signup from './component/Login/Signup';
import Signin from './component/Login/Signin';


class App extends Component {  

  render(){
  return (

        <BrowserRouter>
           <div className='App'>
           <Navbar/> 
               <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/signin" element={<Signin/>}/>

               </Routes>
           <Footer/>    
           </div>
        </BrowserRouter>



  )
  }
}

export default App;
 