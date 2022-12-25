import React, { useState } from 'react';
import EmployeeDashTitle from './EmplooyeeDashTitle'
import CompanyList from '../Company/CompanyList';
import AddCompany from '../Company/AddCompany';
import EditCompany from '../Company/EditCompany';
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
const items = [
  getItem('Company', '/employeedash/company', <UserOutlined  />),
  getItem('Complain', '/employeedash/complain', <UserOutlined />, [
    getItem('cleaning product', '/employeedash/pagec1'),
    getItem('cosmatics', '/employeedash/pagec2'),
    getItem('Pharmaceuticals', '/employeedash/pagec3'),
    getItem('Grocery Store', '/employeedash/pagec3'),
  ]),
  getItem('Sign out', '/', <FileOutlined />),
];
const EmployeeDash = () => {

   const navigate =useNavigate()

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
                     <Route path="/company" element={<CompanyList/>}/>
                     <Route path="/addcompany" element={<AddCompany/>}/> 
                     <Route path="/pagec1" element={<EmployeeDetail/>}/>
                     <Route path="/editecompany/:commpid" element={<EditCompany/>}/>
                     <Route path="/pagec3" element={<div>pagec3</div>}/>              
               </Routes>

       </div>
            

  }
};
export default EmployeeDash;