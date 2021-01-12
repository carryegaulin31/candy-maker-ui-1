import React from 'react'
import Page from '../components/Page'
import Title from '../components/Title'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [manufacturerList, setManufacturerList] = useState({})
  const [filteredManufacturerList, setFilteredManufacturerList] = useState([])

  return (
    <Page>
      <Title />
    </Page >
  )
}
