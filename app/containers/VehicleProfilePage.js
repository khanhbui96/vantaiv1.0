import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
import Profile from '../components/Vehicle/Profile';
import {getAll, addVehicle, deleteVehicle, selectVehicle, updateVehicle} from '../actions/vehicle.actions'
import {getErrs} from '../actions/erros.actions';

const mapStateToProps = state=>{
  return {
    vehicles: state.vehicles,
    updateData: state.selectVehicles,
    errs: state.errs
  }
};

const VehicleProfilePage = (props)=>{
  const {getAll, vehicles} = props;
  useEffect(()=>{
    getAll();
  },[])
    return(
        <Wrapper>
            <Profile vehicleProps={props}/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    addVehicle,
    deleteVehicle,
    selectVehicle,
    updateVehicle,
    getErrs
  }
)(VehicleProfilePage);