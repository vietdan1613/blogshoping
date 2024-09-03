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
          <p>🌱 Hướng dẫn chăm sóc cây cảnh: Mẹo trồng và duy trì cây xanh trong nhà và ngoài trời, cách tạo các khu vườn mini, kiểng xanh, giải đáp các thắc mắc thường gặp về cây cảnh</p>
          <p>🐟 Hướng dẫn chăm sóc cá cảnh: Thiết lập và duy trì bể cá từ cơ bản đến nâng cao, Chăm sóc các loại cá cảnh guppy, trồng và chăm sóc cây thủy sinh, bí quyết giữ cho nước trong bể luôn sạch và ổn định</p>
        </Main>
      </Stack>
      <Stack>
        <Main>
          <p>
            <b>- Địa Chỉ Văn Phòng:</b> Block B5, 12 Đ. Nguyễn Hữu Thọ, Phước
            Kiển, Nhà Bè, Hồ Chí Minh
          </p>
          <p>
            <b>- Số Điện Thoại:</b> 0395 736 916
          </p>
          <div style={{ display: 'flex' }}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 48 48'
                width='24px'
                height='24px'
              >
                <path
                  fill='#FF3D00'
                  d='M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z'
                />
                <polygon fill='#FFFFFF' points='20,31 20,17 32,24 ' />
              </svg>
            </span>
            <a target='_blank' href='https://www.youtube.com/@treecy2024'>
              https://www.youtube.com/@treecy2024
            </a>
          </div>
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
