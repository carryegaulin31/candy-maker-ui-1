import React from 'react'
import styled from 'styled-components'

const Product = styled.div`
font-size: 16px;
margin: 10px 0;
text-align: center;
`

export default ({ id, name, yearIntroduced, manufacturerId }) => (
  <Hero key={id}>
    {`${name} (${yearIntroduced}) (${manufacturerId})`}
  </Hero>
)
