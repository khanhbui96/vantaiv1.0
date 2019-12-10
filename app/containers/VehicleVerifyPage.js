import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
import Verify from '../components/Vehicle/Verify';
import {getAll, selectVehicle, updateVehicle} from '../actions/vehicle.actions';
import {getAllCommand} from '../actions/command.actions';
const mapStateToProps = state=>{
  return {
    vehicles: state.vehicles,
    updateData: state.selectVehicles,
    commands: state.commands
  }
};

const VehicleVerifyPage = (props)=>{
  const {getAll, vehicles} = props;
  useEffect(()=>{
    getAll();
  },[]);
    return(
        <Wrapper>
            <Verify vehicleProps={props}/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    getAllCommand,
    selectVehicle,
    updateVehicle
  }
)(VehicleVerifyPage);