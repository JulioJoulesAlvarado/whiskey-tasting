import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/',
})

export const insertWhiskey = payload => api.post(`/whiskey`, payload)
export const getAllWhiskeys = () => api.get(`/whiskeys`)
export const updateWhiskeyById = (id, payload) => api.put(`/whiskey/${id}`, payload)
export const deleteWhiskeyById = id => api.delete(`/whiskey/${id}`)
export const getWhiskeyById = (id) => api.get(`/whiskey/${id}`)

const apis = {
    insertWhiskey,
    getAllWhiskeys,
    updateWhiskeyById,
    deleteWhiskeyById,
    getWhiskeyById,
}

export default apis