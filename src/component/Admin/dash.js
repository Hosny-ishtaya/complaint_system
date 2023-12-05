import React, {useEffect, useState } from 'react';
import AddEmployee from '../Login/Signup';
import FarmerList from '../Employee/FarmerList';
import AdminDashTitle from './AdminDashTitle';
import CustemerList from '../Custemer/CustemerList';
import AddChalet from '../Company/AddChalet';

import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import EmployeeEdit from '../Employee/EmployeeEdit';
import EmployeeDetail from '../Employee/EmployeeDetail';
import Allcomplaints from './Allcomplaints';
import AddFarmer from '../Employee/AddFarmer';
// import Chart from './Chart';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('تسجيل مشترك مزرعه', '/about/addcompany', <DesktopOutlined />),
  getItem('تسجيل مزرعة', '/about/addfarmer', <UserOutlined  />),
  getItem('مشتركين المزارع', '/about/employeelist', <UserOutlined  />),
  getItem('المزارع', '/about/custemerlist', <DesktopOutlined />),
  getItem('All Complaint', '/about/allcomplaint', <DesktopOutlined />),
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '/about/page3'),
  //   getItem('Bill', '/about/page4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Sign out', '/', <FileOutlined />),
];
const Dash = () => {

   const navigate =useNavigate()

  //  useEffect(()=>{

  //   let admin=window.sessionStorage.getItem('admin');

  //   console.log('ttthhh',admin)
  //   if(admin===''||admin===null)
  //   {
  //     navigate('/signin');
  //   }



  //  },[]);

  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();s
  return (
    <Layout
      style={{
        minHeight: '100vh',
        background:'rgba(183, 183, 138,250 )',
        
      }}
    >
      <Sider style={{
            background: 'rgba(101, 136, 100,250)',
            
          }}collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>

      <AdminDashTitle/>
        <div
          style={{
            height: 5,
            margin: 10,
            background: 'rgba(183, 183, 138,250)',
            
          }}
        />
        <Menu   onClick={({key})=>{
          if(key=="signout"){

          }
          else{
            console.log(key)
            navigate(key)

          }
        }} theme="dark" defaultSelectedKeys={['sub1']} mode="inline" items={items}  style={{
          
          background:'rgba(101, 136, 100,250)',
          fontSize:18,
          fontFamily:300,
          
          
        }}/>
      </Sider>
      <Layout className="site-layout">
        {/* <Header
          style={{
            padding: 0,
            background: 'rgba(100, 200, 138, 0)',
          }}
        /> */}
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 10,
              minHeight: 360,
              background:'rgba(183, 183, 138,250 )',
            }}
          >
          
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          {/* Ant Design ©2018 Created by Ant UED */}
        </Footer>
      </Layout>
    </Layout>
  );

  function Content (){

    return <div>   
               <Routes>
                     {/* <Route path="/" element={<Chart/>}/>  */}
                     <Route path="/addfarmer" element={<AddFarmer/>}/>
                     <Route path="/addemployee" element={<AddEmployee/>}/>
                     <Route path="/employeelist" element={<FarmerList/>}/>
                     <Route path="/edite/:empid" element={<EmployeeEdit/>}/>
                     <Route path="/detail/:empid" element={<EmployeeDetail/>}/>
                     <Route path="/custemerlist" element={<CustemerList/>}/>
                     <Route path="/allcomplaint" element={<Allcomplaints/>}/>
                     <Route path="/addcompany" element={<AddChalet/>}/> 
                     <Route path="/page4" element={<div>page4</div>}/>              
               </Routes>

       </div>
            

  }

  

};
export default Dash;