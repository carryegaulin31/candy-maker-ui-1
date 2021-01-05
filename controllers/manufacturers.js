/* eslint-disable linebreak-style */
import models from '../models'

export const getAllManufacturers = async (request, response) => {
  const manufacturers = await models.Manufacturers.findAll({
    include: [{ model: models.Products }],
  // eslint-disable-next-line linebreak-style
  })

  return response.send(manufacturers)
}

export const getManufacturerById = async (request, response) => {
  const { id } = request.params

  const manufacturer = await models.Manufacturers.findOne({
    attributes: ['id', 'name', 'country'],
    where: { id },
    include: [{
      model: models.Products,
      attributes: ['id', 'name', 'yearIntroduced'],
    }],
  })

  return manufacturer
    ? response.send(manufacturer)
    : response.sendStatus(404)
}
