import callApi from '../utils/callApi';
import { GET_ERRS, GET_CURRENT_USER } from '../constants/actions';
import {getErrs} from './erros.actions'
import setAuthHeader from '../utils/setAuthHeader';

export const getCurrentUser = () => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        await callApi('get', '/users', null);
    }catch(err){
        console.log(err)
    }
   
}
export const loginUser = (data, func) => async dispatch=>{    
    try{
        const User = await callApi('post', '/users/login', data);
        await localStorage.setItem('jwt', User.data.token);
        await func(User.data.type);
    }catch(err){
        await dispatch(getErrs(err.response.data))
    }

};
export const registerUser = (data, func) => async dispatch=>{
    try{
        await callApi('post', '/users/register', data)
        await func()
    }catch(err){
        await dispatch({
            type: GET_ERRS,
            payload: err.response.data
        })
    }
};
