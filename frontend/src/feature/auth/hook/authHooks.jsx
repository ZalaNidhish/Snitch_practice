import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router'
import {useDispatch} from 'react-redux'
import {LoginUserAction, RegisteruserAction} from '../state/authAction'


export const useAuth = ()=>{

    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLoginUser = (data) => {
        dispatch(LoginUserAction(data))
        // reset()
    }

    const handleRegister = (data)=>{
        dispatch(RegisteruserAction(data))
        // reset()

    }

    return {register, handleSubmit, handleLoginUser, handleRegister, navigate, errors}

}