import React, { useEffect, useState } from 'react'
import ManufacturerDetails from '../components/ManufacturerDetails'
import Page from '../components/Page'
import Title from '../components/Title'
import { retrieveCandies } from '../utils/candies'

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
      {
        maunfacturerName
          ? (<ManufacturerDetails name={manufacturer.name} country={manufacturer.country} />)
          : (<div>Sorry, I do not know that manufacturer</div>)
      }
    </Page>
  )
}
