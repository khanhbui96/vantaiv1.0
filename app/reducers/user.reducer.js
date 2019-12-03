import {GET_CURRENT_USER} from "../constants/actions";

const initialState = {};

const user = (state=initialState, action)=>{
    switch(action.type){
        case GET_CURRENT_USER:
            return {...action.payload}
        default:
            return state
    }
};

export default user