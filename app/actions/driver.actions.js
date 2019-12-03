import callApi from '../utils/callApi';
import {
        GET_DRIVERS,
        ADD_DRIVER,
        DELETE_DRIVER,
        SELECT_DRIVER,
        UPDATE_DRIVER,
        LOADING
    } from '../constants/actions';
import setAuthHeader from '../utils/setAuthHeader';
import {getErrs} from './erros.actions';
import loading from './loading.action';

export const getAll = () => async dispatch => {
    try{
        await dispatch(loading());
        await setAuthHeader(localStorage.getItem('jwt'));
        const drivers = await callApi('get', '/drivers/getAll', null);
        await dispatch({
            type: GET_DRIVERS,
            payload: drivers.data
        })
    }catch(err){
        console.log(err)
    }
   
};
export const addDriver = (data, func) => async dispatch => {
    try{
        func(0);
        await dispatch(loading());
        await setAuthHeader(localStorage.getItem('jwt'));
        const driver = await callApi('post', '/drivers/create', data);
        await dispatch({
            type: ADD_DRIVER,
            payload: driver.data
        })
    }catch(err){
        func(1);
        await dispatch(getErrs(err.response.data))
    }  
};
export const deleteDriver = (id) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/drivers/delete/${id}`, null );
        await dispatch({
            type: DELETE_DRIVER,
            payload: id
        })
    }catch(err){
        console.log(err)
    }
};
export const updateDriver = (id, data, func) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/drivers/update/${id}`, data );
        await dispatch({
            type: UPDATE_DRIVER,
            payload: {
                id,
                data
            }
        })
        func()
    }catch(err){
        console.log(err)
    }
};
export const selectDriver = (driver) => async dispatch => {
    try{
        await dispatch({
            type: SELECT_DRIVER,
            payload: {
                ...driver
            }
        })
    }catch(err){
        console.log(err)
    }
};