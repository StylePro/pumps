import {configureStore} from "@reduxjs/toolkit";
import pumpReducer from './pumpSlice'
import propertiesReducer from './dataSlice'

export default configureStore ({
    reducer: {
        pump: pumpReducer,
        propertiesPumps: propertiesReducer
    }
})