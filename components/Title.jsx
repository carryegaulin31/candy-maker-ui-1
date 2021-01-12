import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`

const Subtitle = styled.div`
  font-size: 20px;
`
export default () => (
  <>
    <div className="title">Candy Makers</div>
    <div className="subtitle">A searchable list of all your favorite manufacturers of candies</div>
  </>
)
