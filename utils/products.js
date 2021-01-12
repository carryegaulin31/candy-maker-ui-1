import fetchProductsForManufacturer from '../actions/products'

export const getManufacturerNameFromUrl = location => (location &&
  location.pathname
  ? location.pathname.split('/products/').pop()
  : ''
)

export const retrieveProducts = async (location) => {
  const manufacturerName = getManufacturerNameFromUrl(location)

  if (!manufacturerName) return { details: {}, products: [] }

  const { id, name, country, products } = await
  fetchProductsForManufacturer(manufacturerName)

  if (!id || !name || !country || !products) {
    return {
      details: {},
      products:
      [],
    }
  }
  return { products, details: { id, name, country } }
}
