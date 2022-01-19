import { toast } from "react-toastify"

export const toastSucess=(message)=> {
 toast.success(message,{
     position:'top-center',
     autoClose:true
 })
}

export const toastError=(message)=> {
    toast.error(message,{
        position:'top-center',
        autoClose:true
    })
}