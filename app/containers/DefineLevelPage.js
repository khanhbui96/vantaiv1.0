import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
import Equiment from '../components/Vehicle/Equiment';
import DefineLevelList from '../components/DefineLevel/DefineLevelList';
import {
  getAll,
  addDefineLevel,
  deleteDefineLevel,
  updateDefineLevel,
  selectDefineLevel
} from '../actions/defineLevel.actions';
import {getErrs} from '../actions/erros.actions';


const mapStateToProps = state=>{
  return {
    defineLevels: state.defineLevel,
    updateData: state.selectDefineLevel,
    errs: state.errs
  }
};

const DefineLevelPage = (props)=>{
  const {getAll, defineLevels} = props;
  useEffect(()=>{
    getAll()
  }, [])
    return(
        <Wrapper>
            <DefineLevelList defineLevelProps={props} />
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    addDefineLevel,
    deleteDefineLevel,
    updateDefineLevel,
    selectDefineLevel,
    getErrs
  }
)(DefineLevelPage);