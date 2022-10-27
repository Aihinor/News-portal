import React from 'react'
import './assets/base.less'
import { Layout } from 'antd';
import WalkingLantern from './components/WalkingLantern'
import Search from './components/Search'
import Top from './components/Top';
import Tab from './components/Tab'
import { Outlet } from 'react-router-dom';
import Sider from './components/Sider';
import Hiddenheader from './components/Hiddenheader';


const { Header } = Layout;

export default function App() {
  return (
    <div>
      <Layout>
        <Hiddenheader />
        <Header className='header'>
          <Top />
          <Search />
          <WalkingLantern />
        </Header>
        <div className='main_box'>
          <div className='content'>
            <Tab />
            <Outlet />
          </div>
          <Sider />
        </div>
      </Layout>
    </div>
  )
}
