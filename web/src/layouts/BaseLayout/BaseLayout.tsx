import React, { useState } from 'react'

import {
  HomeOutlined as Home,
  RocketOutlined as About,
  DashboardOutlined as Dashboard,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { Header, Content, Footer } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import Typography from 'antd/es/typography'

import { Link, routes } from '@redwoodjs/router'

type MenuItem = Required<MenuProps>['items'][number]

const { Title } = Typography

function createMenuItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuItem[] = [
  createMenuItem(<Link to={routes.home()}>Home</Link>, 'home', <Home />),
  createMenuItem(<Link to={routes.about()}>About</Link>, 'about', <About />),
  createMenuItem(
    <Link to={routes.dashboardBuilder()}>Dashboard Builder</Link>,
    'dashboard',
    <Dashboard />
  ),
]

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [current, setCurrent] = useState('home')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header
          style={{
            padding: '10px',
            margin: '1px',
          }}
        >
          <Title style={{ textAlign: 'center' }}>Dark Launch Your Way</Title>
        </Header>
        <Layout>
          <Sider style={{ padding: '10px' }} width={'15%'}>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              items={items}
            />
          </Sider>
          <Content>Content</Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>An M&A Creation</Footer>
      </Layout>
    </>
  )
}

export default App
