import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Team = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`

export default ({ id, name, country }) => (
  <Team key={id}>
    <NavLink to={`/manufacturers/${id}`}>{`${name} (${country})`}</NavLink>
  </Team>
)
