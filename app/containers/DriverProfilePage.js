import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
import Profile from '../components/Driver/Profile';
import {getErrs} from '../actions/erros.actions';
import {
  getAll,
  addDriver,
  deleteDriver,
  selectDriver,
  updateDriver
} from '../actions/driver.actions'

const mapStateToProps = state=>{
  return {
    drivers: state.drivers,
    updateData: state.selectDriver,
    errs: state.errs
  }
};

const DriveProfilePage = (props)=>{
  const {getAll, drivers} = props;
  useEffect(()=>{
    getAll()
  }, [])
    return(
        <Wrapper>
            <Profile driverProps={props}/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    addDriver,
    deleteDriver,
    selectDriver,
    updateDriver,
    getErrs
  }
)(DriveProfilePage);