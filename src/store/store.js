import {configureStore} from "@reduxjs/toolkit";
import pumpReducer from './pumpSlice'
import propertiesReducer from './dataPumpSlice'
import propertiesElectricReducer from './dataElectricMotorSlice'
import availabilityMotorElectricReducer from './availabilityMotorElectric'

export default configureStore ({
    reducer: {
        pumps: pumpReducer,
        propertiesPumps: propertiesReducer,
        propertiesElectricMotor: propertiesElectricReducer,
        availabilityMotorElectric: availabilityMotorElectricReducer
    }
})