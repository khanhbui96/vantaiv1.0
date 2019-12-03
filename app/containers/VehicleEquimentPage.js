import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
import Equiment from '../components/Vehicle/Equiment';
import {getAll, selectVehicle, updateVehicle} from '../actions/vehicle.actions';
const mapStateToProps = state=>{
  return {
    vehicles: state.vehicles,
    updateData: state.selectVehicles
  }
};

const VihecleEquimentPage = (props)=>{
  const {getAll, vehicles} = props;
  useEffect(()=>{
    getAll()
  }, [])
    return(
        <Wrapper>
            <Equiment vehicleProps={props}/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    selectVehicle,
    updateVehicle
  }
)(VihecleEquimentPage);