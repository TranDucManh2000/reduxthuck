import React from 'react';
import Actionhand from '../action/Actionhand';
import { combineReducers } from 'redux'

const Rootreducce = combineReducers ({
    action : Actionhand,
});

export default Rootreducce;
