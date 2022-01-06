import * as api from '../api'

export const getJobs = () => async(dispatch) =>{
    try{
        const {data} = await api.getJobs()
        dispatch({type:'getJobs', payload:data})
    }catch(error){
        console.log(error.message)
    }
}

export const search = (post) => async(dispatch) =>{

    try{
        console.log(post)
        const {data} = await api.search(post)
        console.log(data)
        dispatch({type:'search', payload:data})
        console.log(data)
    }catch(error){
        console.log(error.message)
    }
}

export const findOne = (post) => async(dispatch) =>{

    try{
        const {data} = await api.findOne(post)
        dispatch({type:'findOne', payload:data})
    }catch(error){
        console.log(error.message)
    }
}

export const addJob = (post) => async(dispatch) =>{

    try{
        const {data} = await api.addJob(post)
        dispatch({type:'addJob', payload:data})
        console.log(data)
        window.location = '/profile'

    }catch(error){
        dispatch({type:'error'})
        console.log(error.message)
    }
}

export const profileJob = () => async(dispatch) =>{

    try{
        const {data} = await api.profileJob()
        dispatch({type:"profileJob", payload:data})
        console.log("job "+data)
    }catch(error){
        console.log(error.message)
    }
}

// export const signin = () =>