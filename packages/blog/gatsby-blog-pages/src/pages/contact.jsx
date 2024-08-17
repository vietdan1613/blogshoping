import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'
import ContactInfo from '@widgets/ContactInfo'
import Commitment from '@widgets/Commitment'

const PageContact = props => (
  <Layout {...props}>
    <Seo title='Contact' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="Liên Hệ"
          subheader='Chúng tôi cam kết hỗ trợ khách hàng tận tâm, giải đáp mọi thắc mắc và xử lý nhanh chóng mọi yêu cầu liên quan đến sản phẩm và dịch vụ.'
        />
        <Divider />
        <ContactForm />
      </Main>
      <Sidebar>
        <Commitment />
        {/* <Divider /> */}
        {/* <ContactInfo /> */}
      </Sidebar>
    </Stack>
  </Layout>
)

export default PageContact
