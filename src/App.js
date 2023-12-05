
import './App.css';
import React,{Component}from 'react';
import Navbar from'./component/Navbar';
import Home from'./component/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';

import Signup from './component/Login/Signup';
import Signin from './component/Login/Signin';
import Dash from './component/Admin/dash';
import 'antd/dist/antd.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EmployeeDash from './component/EmployeeDash/EmployeeDash';
import 'semantic-ui-css/semantic.min.css'
import Contactus from './component/Login/Contactus'
import Place from './component/Choose_Place/Place';
import HomeSectionone from './component/HomeSectionone';
import ChaletList from './component/Chalets/listChalets';


class App extends Component {  

  render(){
  return (

        <BrowserRouter>
           <div className='App'>
           <Navbar/> 
               <Routes>
                    <Route path="/" element={<HomeSectionone/>}/>
                    <Route path="/about/*" element={<Dash/>}/>
                    <Route path="/employeedash/*" element={<EmployeeDash/>}/>
                    <Route path="/contactus" element={<Contactus/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/Signup" element={<Signup/>}/>
                    <Route path="/place" element={<Place/>}/>
                    <Route path="/chalets" element={<ChaletList/>}/>

               </Routes>
               
           </div>
        </BrowserRouter>



  )
  }
}

export default App;
 