// export default (state=[], action) =>{
//     console.log(action)
//     switch(action.type){
//         case 'signin':
//             console.log("her sihnin")
//             return state
//             break
        
//         case 'signup':
//             console.log("here upp")
//             return state
//             break

//         default:
//             console.log(action)
//             break
//             return state
//     }

// }

// // export default authReducer

import Cookies from 'js-cookie'

export default (state={authData: null}, action) =>{
    switch(action.type){
        case 'signin':
            localStorage.setItem('profile', JSON.stringify({...action?.profile.data}))
            Cookies.set('profile',action?.profile.token, {expires: 1/24})
            console.log(action?.profile.token)

            return { ...state, authData: action?.profile.token }

        case 'signup':
            // localStorage.setItem('profile', JSON.stringify({...action?.profile.data}))
            // Cookies.set('profile',action?.profile.token, {expires: 1/24})
            console.log(action?.profile.token)

            return { ...state, authData: action?.profile.token }

        case 'profile':
            console.log(action?.payload)
            return { ...state, authData: action?.payload }

        case 'error':
            console.log("ERROR")
            return { ...state, authData: "Invalid Login Parameters" }

        case 'error1':
            console.log("taken")
            return { ...state, authData: "This email is taken" }

        default:
            console.log(action?.data)
            return state
    }
}