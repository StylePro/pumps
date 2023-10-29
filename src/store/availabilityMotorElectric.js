import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";


const initialState = {
    engineAvailability: {},
    typesOfValue: [
        {id: uuidv4(), value: 'Да', source: true},
        {id: uuidv4(), value: 'Нет', source: false},
    ]
}


export const availabilityMotorElectricSlice = createSlice({
        name: 'electricMotor',
        initialState,
        reducers: {
            addDataElectricMotor(state, action) {
                state.engineAvailability = state.typesOfValue.reduce((accum, item)=> {
                    if (item.value === action.payload) {
                        accum = item
                    }
                    return accum
                }, {})
            }
        }
    }
)

export const {addDataElectricMotor} = availabilityMotorElectricSlice.actions;
export default availabilityMotorElectricSlice.reducer;