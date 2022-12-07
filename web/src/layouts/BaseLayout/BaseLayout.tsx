import {
  HomeOutlined as HomeIcon,
  RocketOutlined as AboutIcon,
  DashboardOutlined as DashboardIcon,
} from '@ant-design/icons'
import { Col, Layout, Menu, Row, Space } from 'antd'
import { Typography } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import MenuItem from 'antd/es/menu/MenuItem'

import { Link, routes } from '@redwoodjs/router'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const { Text } = Typography

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ minWidth: '100vw' }}>
        <h1>LaunchDarkly Data Dashboard</h1>
      </Header>
      <Layout>
        <Sider>
          <Menu>
            <MenuItem icon={<DashboardIcon />}>
              <Link to={routes.dashboardBuilder()}>Dashboard Builder</Link>
            </MenuItem>
            <MenuItem icon={<HomeIcon />}>
              <Link to={routes.home()}>Home</Link>
            </MenuItem>
          </Menu>
        </Sider>
        <Content style={{ width: '100%' }}>
          <Layout>
            <Content>
              <Row>
                <Col span={12}>
                  <main>{children}</main>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer>
        <Row>
          <Col span={2}>
            <Link to={routes.about()}>
              <Space size={8}>
                <AboutIcon />
                <Text>About</Text>
              </Space>
            </Link>
          </Col>
          <Col span={10} offset={10}>
            <Text>An M&A Creation</Text>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}

export default BaseLayout
