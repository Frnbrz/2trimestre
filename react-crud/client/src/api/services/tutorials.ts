import { Tutorial } from '../../models/tutorials'
import http from '../axios'

const getAll = () => {
  return http.get('/tutorials')
}

const get = (id: number) => {
  return http.get(`/tutorials/${id}`)
}

const create = (data: Tutorial) => {
  return http.post('/tutorials', data)
}

const update = (id: number, data: Tutorial) => {
  return http.put(`/tutorials/${id}`, data)
}

const remove = (id: number) => {
  return http.delete(`/tutorials/${id}`)
}

const removeAll = () => {
  return http.delete(`/tutorials`)
}

const findByTitle = (title: string) => {
  return http.get(`/tutorials?title=${title}`)
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
