import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";


const initialState = {
    engineAvailability: '',
    typesOfValue: [
        {id: uuidv4(), value: 'Да', source: true},
        {id: uuidv4(), value: 'Нет', source: false},
    ]
}


export const availabilityMotorElectricSlice = createSlice({
        name: 'electricMotor',
        initialState,
        reducers: {

        }
    }
)

export const {} = availabilityMotorElectricSlice.actions;
export default availabilityMotorElectricSlice.reducer;