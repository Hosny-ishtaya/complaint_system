
import './App.css';
import React,{Component}from 'react';
import Navbar from'./component/Navbar';
import Home from'./component/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';

import AddEmployee from './component/Login/AddEmployee';
import Signin from './component/Login/Signin';
import Dash from './component/Admin/dash';
import 'antd/dist/antd.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EmployeeDash from './component/EmployeeDash/EmployeeDash';
import 'semantic-ui-css/semantic.min.css'



class App extends Component {  

  render(){
  return (

        <BrowserRouter>
           <div className='App'>
           <Navbar/> 
               <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about/*" element={<Dash/>}/>
                    <Route path="/employeedash/*" element={<EmployeeDash/>}/>
                    {/* <Route path="/signup" element={<Signup/>}/> */}
                    <Route path="/signin" element={<Signin/>}/>

               </Routes>
               
           </div>
        </BrowserRouter>



  )
  }
}

export default App;
 