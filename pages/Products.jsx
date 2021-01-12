import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import ManufacturerDetails from '../components/ManufacturerDetails'
import Title from '../components/Title'
import { retrieveProducts } from '../utils/products'


export default ({ location }) => {
  const [maunfacturerName, setManufacturerName] = useState('')
  const [manufacturer, setManufacturer] = useState({})
  const [productList, setProductList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { details, products } = await retrieveProducts(location)

      setManufacturerName(details.name)
      setManufacturer(details)
      setProductList(products)
    }
    pullData()
  }, [])

  return (
    <Page>
      <Title />
      {
        maunfacturerName
          ? (
            <>
              <ManufacturerDetails name={manufacturer.name} country={manufacturer.country} />
              {productList.map(hero => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  yearIntroduced={product.yearIntroduced}
                  manufacturerId={product.manufacturerId}
                />
              ))}
            </>
          )
          : (<NotFound message="Sorry, I do not know that product" />)
      }
    </Page>
  )
}
