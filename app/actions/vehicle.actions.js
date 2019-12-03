import callApi from '../utils/callApi';
import {
        GET_VEHICLES,
        ADD_VEHICLES,
        DELETE_VEHICLE,
        SELECT_VEHICLE,
        UPDATE_VEHICLE,
        GET_ERRS,
        LOADING
    } from '../constants/actions';
import setAuthHeader from '../utils/setAuthHeader';
import {getErrs} from './erros.actions';
import loading from './loading.action';

export const getAll = () => async dispatch => {
    try{
        await dispatch(loading());
        await setAuthHeader(localStorage.getItem('jwt'));
        const vehicles = await callApi('get', '/vehicles/getAll', null);
        await dispatch({
            type: GET_VEHICLES,
            payload: vehicles.data
        })
    }catch(err){
        console.log(err)
    }
   
};
export const addVehicle = (data, func) => async dispatch => {
    try{
        func(0);
        await dispatch(loading());
        await setAuthHeader(localStorage.getItem('jwt'));
        const vehicle = await callApi('post', '/vehicles/create', data);
        await dispatch({
            type: ADD_VEHICLES,
            payload: vehicle.data
        })
       
    }catch(err){
        func(1);
        await dispatch(getErrs(err.response.data))
    }  
};
export const deleteVehicle = (id) => async dispatch => {
    try{
        await dispatch(loading());
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/vehicles/delete/${id}`, null );
        await dispatch({
            type: DELETE_VEHICLE,
            payload: id
        })
    }catch(err){
        console.log(err)
    }
};
export const updateVehicle = (id, data, func) => async dispatch => {
    try{
        func();
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/vehicles/update/${id}`, data );
        await dispatch({
            type: UPDATE_VEHICLE,
            payload: {
                id,
                data
            }
        });
        
    }catch(err){
        console.log(err)
    }
};
export const selectVehicle = (vehicle) => async dispatch => {
    try{
        await dispatch({
            type: SELECT_VEHICLE,
            payload: {
                ...vehicle
            }
        })
    }catch(err){
        console.log(err)
    }
};
