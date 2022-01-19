import Http from "./Http"
import { AppConfig } from './Config.json'

export const SignUpService = (user) => {
    return Http.post(`${AppConfig}/SignUp`, user)
}

export const SignInService = user => {
    return Http.post(`${AppConfig}/SignIn`,JSON.stringify(user))

}

export const getSingleUserService=id=> {
 
    return Http.get(`${AppConfig}/getSingleUser/${id}`)
}

export const getUsersService = () => {
    return Http.get(`${AppConfig}/getUsers`)
}

export const editUserService=(id,data)=> {
    return Http.put(`${AppConfig}/EditUser/${id}`,data)
}