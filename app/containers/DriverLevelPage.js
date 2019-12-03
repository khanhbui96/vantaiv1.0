
import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
import Level from '../components/Driver/Level';

import {
  getAll
} from '../actions/driver.actions'

const mapStateToProps = state=>{
  return {
    drivers: state.drivers,
    updateData: state.selectDriver
  }
};

const DriverLevelPage = (props)=>{
  const {getAll, drivers} = props;
  useEffect(()=>{
    getAll()
  }, [])
    return(
        <Wrapper>
            <Level vehicleProps={props}/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll
  }
)(DriverLevelPage);