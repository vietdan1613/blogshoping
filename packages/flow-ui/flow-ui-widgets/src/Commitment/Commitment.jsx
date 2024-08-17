import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'

const Commitment = props => (
  <Section aside title='Cam Kết' {...props}>
    <Card variant='paper'>
      <Text variant='p'>
      Chúng tôi cam kết cung cấp <b>sản phẩm đạt chất lượng cao nhất, đúng với mô tả</b> và thông tin đã cung cấp. Mọi sản phẩm đều được kiểm tra kỹ lưỡng trước khi đến tay khách hàng.
      </Text>
    </Card>
  </Section>
)

export default Commitment
