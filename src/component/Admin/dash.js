import React, { useState } from 'react';
import AddEmployee from '../Login/AddEmployee';
import EmployeeList from '../Employee/EmployeeList';
import AdminDashTitle from './AdminDashTitle';

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
  getItem('Employee', '/about/employeelist', <UserOutlined  />),
  getItem('Company', '/', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '/about/page3'),
    getItem('Bill', '/about/page4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Sign out', '/', <FileOutlined />),
];
const Dash = () => {

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

      <AdminDashTitle/>
        <div
          style={{
            height: 5,
            margin: 10,
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
                     <Route path="/" element={<div>home</div>}/> 
                     <Route path="/addemployee" element={<AddEmployee/>}/>
                     <Route path="/employeelist" element={<EmployeeList/>}/>
                     <Route path="/edite/:empid" element={<EmployeeEdit/>}/>
                     <Route path="/detail/:empid" element={<EmployeeDetail/>}/>
                     <Route path="/page4" element={<div>page4</div>}/>              
               </Routes>

       </div>
            

  }

  

};
export default Dash;