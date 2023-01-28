import React, { useEffect, useState } from 'react';
import EmployeeDashTitle from './EmplooyeeDashTitle'
import CompanyList from '../Company/CompanyList';
import AddCompany from '../Company/AddCompany';
import EditCompany from '../Company/EditCompany';
import Complaint_grocery  from '../Complaint/Grocery_store_complaint'
import Complaint_Details from '../Complaint/Complaint_Details';
import CustemerList from '../Custemer/CustemerList';
import Editcomplaint from '../Complaint/Editcomplaint'
import Chart from '../Admin/Chart'
import StatisticChart from '../Employee/Statisticcom'
import AddEmployee from '../Login/AddEmployee';
import EmployeeList from '../Employee/EmployeeList';

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
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

var countemployee;
const items = [
  // getItem(''+countemployee, '', <companyOutlined  />),
  getItem('Company', '/employeedash/company', <UserOutlined  />),
  getItem('All Customer', '/employeedash/customer', <UserOutlined  />),
  getItem('Statistic Complaint', '/employeedash/statistic', <UserOutlined  />),
  // getItem('Complain', '/employeedash/complain', <UserOutlined />, [
  //   getItem('cleaning product', '/employeedash/pagec1'),
  //   getItem('cosmatics', '/employeedash/pagec2'),
  //   getItem('Pharmaceuticals', '/employeedash/pagec3'),
  //   getItem('Grocery Store', '/employeedash/pagec4'),
  // ]),
  getItem('Sign out', '/', <FileOutlined />),
];
const EmployeeDash = () => {

   const navigate =useNavigate()

   useEffect(()=>{

    let email=window.sessionStorage.getItem('email');
    countemployee =window.sessionStorage.getItem('counte');

    console.log("the",countemployee);

    console.log('the',email);
    if(email===''||email===null)
    {
      navigate('/signin');
    }



   },[]);

  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();s
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <EmployeeDashTitle/>
        <div
          style={{
            height: 10,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu  onClick={({key})=>{
          if(key=="signout"){

          }
          else{
            console.log(key)
            navigate(key)

          }
        }} theme="dark" defaultSelectedKeys={['sub1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: 'rgba(255, 255, 255, 0)',
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background:'rgba(255, 255, 255,2 )',
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
                     <Route path="/" element={<Chart/>}/>
                     <Route path="/company" element={<CompanyList/>}/>
                     <Route path="/statistic" element={<StatisticChart/>}/>
                     <Route path="/customer" element={<CustemerList/>}/>
                     <Route path="/addcompany" element={<AddCompany/>}/> 
                     <Route path="/pagec1" element={<EmployeeDetail/>}/>
                     <Route path="/editecompany/:commpid"  element={<EditCompany/>}/>
                     <Route path="/pagec3" element={<div>pagec3</div>}/>
                     <Route path="/pagec4" element={<Complaint_grocery/>}/> 
                     <Route path="/complaintcompany/:comtid" element={<Complaint_grocery/>}/>
                     <Route path="/pagec4/:comid" element={<Complaint_Details/>}/>
                     <Route path="/editgcomplaint/:idcom" element={<Editcomplaint/>}/>                
               </Routes>

       </div>
            

  }
};
export default EmployeeDash;