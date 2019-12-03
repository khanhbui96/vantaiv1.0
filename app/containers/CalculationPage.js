import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/GuestWrapper';
import Calculation from '../components/Calculation/Calculation';
import {getAll, selectDefineLevel} from '../actions/defineLevel.actions';

const mapStateToProps = state=>{
  return {
    defineLevels: state.defineLevel,
    updateData: state.selectDefineLevel
  }
}
const CalculationPage = (props)=>{
  const {getAll, defineLevels} = props;
  useEffect(()=>{
    getAll()
  }, [defineLevels.isUpdate])
    return(
        <Wrapper>
            <Calculation defineLevelProps={props}/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    selectDefineLevel
  }
)(CalculationPage);