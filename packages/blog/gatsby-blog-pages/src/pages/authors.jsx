import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import AuthorExpanded from '@widgets/AuthorExpanded'
import { useBlogAuthors } from '@helpers-blog'

const PageAuthors = props => {
  const authors = useBlogAuthors()

  return (
    <Layout {...props}>
      <Seo title='Our Team' />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <PageTitle
          header='Giới thiệu'
          subheader='🌿🐠 Chào mừng bạn đến với Treecy - Kênh dành cho những người yêu thích cá cảnh và cây cảnh! 🐠🌿'
        />
      </Stack>
      <Stack>
        <Main>
          <p>
            Nếu bạn đam mê việc chăm sóc và trang trí không gian sống với cây
            xanh và bể cá, thì bạn đã đến đúng nơi! Tại Treecy, chúng tôi chia
            sẻ:
          </p>
          <p>
            🌱 Hướng dẫn chăm sóc cây cảnh: Mẹo trồng và duy trì cây xanh trong
            nhà và ngoài trời, cách tạo các khu vườn mini, kiểng xanh, giải đáp
            các thắc mắc thường gặp về cây cảnh
          </p>
          <p>
            🐟 Hướng dẫn chăm sóc cá cảnh: Thiết lập và duy trì bể cá từ cơ bản
            đến nâng cao, Chăm sóc các loại cá cảnh guppy, trồng và chăm sóc cây
            thủy sinh, bí quyết giữ cho nước trong bể luôn sạch và ổn định
          </p>
        </Main>
      </Stack>
      <Stack>
        <Main>
          <p>
            <b>- Địa Chỉ:</b> Block B5, 12 Đ. Nguyễn Hữu Thọ, Phước Kiển, Nhà
            Bè, Hồ Chí Minh
          </p>
          <p>
            <span>
              <b>- Facebook:</b>
            </span>
            <a
              style={{ marginLeft: '4px' }}
              target='_blank'
              href='https://www.facebook.com/treecy2024'
            >
              facebook.com/treecy2024
            </a>
          </p>
          <p>
            <span>
              <b>- Youtube:</b>
            </span>
            <a
              style={{ marginLeft: '4px' }}
              target='_blank'
              href='https://www.youtube.com/@treecy2024'
            >
              youtube.com/@treecy2024
            </a>
          </p>
          <p>
            <span>
              <b>- Zalo:</b>
            </span>
            <a
              style={{ marginLeft: '4px' }}
              target='_blank'
              href='https://zalo.me/0395736916'
            >
              zalo.me/0395736916
            </a>
          </p>
          <p>
            <span>
              <b>- Tiktok:</b>
            </span>
            <a
              style={{ marginLeft: '4px' }}
              target='_blank'
              href='https://www.tiktok.com/@treecy32'
            >
              tiktok.com/@treecy32
            </a>
          </p>
        </Main>
      </Stack>
      <Stack>
        <Main>
          {authors.map((author, i) => (
            <React.Fragment key={`item-${i}`}>
              <Divider />
              <AuthorExpanded author={author} withLink />
            </React.Fragment>
          ))}
        </Main>
      </Stack>
    </Layout>
  )
}

export default PageAuthors
