
export default (jobs=[], action) =>{
    switch(action.type){
        case 'getJobs':
            console.log(action.payload)
            return action.payload
        case 'search':
            return [action.payload] 
        case 'findOne':
            return action.payload
        case 'addJob':
            return action.payload
        case 'profileJob':
            console.log("JOB" +action.payload)
            return action.payload
        case 'error':
            return "Input all values properly"
        default:
            return jobs
    }
}