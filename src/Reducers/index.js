
import { createSelector } from 'reselect'
import { combineReducers } from 'redux';
import { array } from './array'
import { identificacion } from './identificacion'


export const getArray = createSelector(state => state.array, array => array);
export const getIdentificacion = createSelector(state => state.identificacion, identificacion => identificacion);


export default combineReducers({ array, identificacion });





