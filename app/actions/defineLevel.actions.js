import callApi from '../utils/callApi';
import {
        GET_DEFINE_LEVELS,
        ADD_DEFINE_LEVEL,
        DELETE_DEFINE_LEVEL,
        SELECT_DEFINE_LEVEL,
        UPDATE_DEFINE_LEVEL, 
        LOADING
    } from '../constants/actions';
import setAuthHeader from '../utils/setAuthHeader';
import {getErrs} from './erros.actions';
import loading from './loading.action';

export const getAll = () => async dispatch => {
    try{
        dispatch(loading());
        await setAuthHeader(localStorage.getItem('jwt'));
        const defineLevels = await callApi('get', '/defineLevels/getAll', null);
        await dispatch({
            type: GET_DEFINE_LEVELS,
            payload: defineLevels.data
        })
    }catch(err){
        console.log(err)
    }
   
};
export const addDefineLevel = (data, func) => async dispatch => {
    try{
        func(false);
        dispatch(loading());
        await setAuthHeader(localStorage.getItem('jwt'));
        const defineLevel = await callApi('post', '/defineLevels/create', data);
        await dispatch({
            type: ADD_DEFINE_LEVEL,
            payload: defineLevel.data
        });
      
    }catch(err){
        func(true);
        dispatch(getErrs(err.response.data))
    }  
};
export const deleteDefineLevel = (id) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/defineLevels/delete/${id}`, null );
        await dispatch({
            type: DELETE_DEFINE_LEVEL,
            payload: id
        })
    }catch(err){
        console.log(err)
    }
};
export const updateDefineLevel = (id, data) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/defineLevels/update/${id}`, data );
        await dispatch({
            type: UPDATE_DEFINE_LEVEL,
            payload: {
                id,
                data
            }
        })
    }catch(err){
        console.log(err)
    }
};
export const selectDefineLevel = (defineLevel) => async dispatch => {
    try{
        await dispatch({
            type: SELECT_DEFINE_LEVEL,
            payload: {
                ...defineLevel
            }
        })
    }catch(err){
        console.log(err)
    }
};