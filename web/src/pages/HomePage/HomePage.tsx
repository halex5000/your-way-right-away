import Title from 'antd/es/typography/Title'

import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Title>Welcome to the new LaunchDarkly Data Dashboard Builder</Title>
    </>
  )
}

export default HomePage
