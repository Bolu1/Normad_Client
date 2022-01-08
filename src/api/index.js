import axios from 'axios'

const API = axios.create({ baseURL: "https://normadclient.herokuapp.com/" })

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

export const getJobs = () => API.get(`getAll`)
export const signup = (auth) => API.post(`signup`, auth)
export const signin = (auth) => API.post(`signin`, auth)
export const search = (post) => API.post(`find`, post)
export const findOne = (post) => API.post(`findOne`, post)
export const addJob = (post) => API.post(`addJob`, post)
export const profile = () => API.get('profile')
export const profileJob = () => API.get('profileJob')