import React from 'react'

import {
  PageTemplate, Header, Footer, Paragraph, Heading,Input,Button,
} from 'components'

const LoginPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>Creat a new Account</Heading>
      <Paragraph>Username : </Paragraph>
      <Input></Input>
      <Paragraph>Password : </Paragraph>
      <Input></Input>
      <Button>Login</Button>
    </PageTemplate>
  )
}

export default LoginPage
