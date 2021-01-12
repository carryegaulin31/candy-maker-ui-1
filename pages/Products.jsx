import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import Page from '../components/Page'
import ManufacturerDetails from '../components/ManufacturerDetails'
import Title from '../components/Title'
import { retrieveCandies } from '../utils/candies'
import products from '../models/products'

export default ({ location }) => {
  const [maunfacturerName, setManufacturerName] = useState('')
  const [manufacturerList, setManufacturerList] = useState({})
  const [productList, setProductList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { details, products } = await retrieveCandies(location)

      setManufacturerList(details.name)
      setFilteredManufacturerList(details)
      setProductList(products)
    }
    pullData()
  }, [])

  return (
    <Page>
      <Title />
      {
        maunfacturerName
          ? (<ManufacturerDetails name={manufacturer.name} country={manufacturer.country} />)
          {productList.map(candy => (
            <Product
            key={product.id}
            id={product.id}
            name={product.name}
            yearIntroduced={product.yearIntroduced}

          ))}
          : (<div>Sorry, I do not know that manufacturer</div>)
      }
    </Page>
  )
}
