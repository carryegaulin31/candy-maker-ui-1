import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Title from '../components/Title'

export default ({ location }) => {
  const [maunfacturerName, setManufacturerName] = useState('')
  const [manufacturerList, setManufacturerList] = useState({})
  const [candyList, setCandyList] = useState([])
  const [filteredManufacturerList, setFilteredManufacturerList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { details, candies } = await retrieveCandies(location)

      setManufacturerList(details.name)
      setFilteredManufacturerList(details)
      setCandyList(candies)
    }
    pullData()
  }, [])

  return (
    <Page>
      <Title />
    </Page >
  )
}
