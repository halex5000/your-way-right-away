import { Layout } from 'antd'
import Title from 'antd/es/skeleton/Title'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <Layout>
        <Title>Created from the genius of Munnawar and Alex</Title>
        <Link to={routes.home()}>Return home</Link>
      </Layout>
    </>
  )
}

export default AboutPage
