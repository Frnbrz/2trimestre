import { ProductModel } from '../../models/tutorials'
import http from '../axios'

const getAll = () => {
  return http.get('/products')
}

const get = (id: number) => {
  return http.get(`/products/${id}`)
}

const create = (data: ProductModel) => {
  return http.post('/products', data)
}

const update = (id: number, data: ProductModel) => {
  return http.put(`/products/${id}`, data)
}

const remove = (id: number) => {
  return http.delete(`/products/${id}`)
}

const removeAll = () => {
  return http.delete(`/products`)
}

const findByTitle = (title: string) => {
  return http.get(`/products?title=${title}`)
}

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
}

export default TutorialService
