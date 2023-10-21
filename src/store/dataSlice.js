import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const initialState = {
    pump: '',
    property: [
        {id: uuidv4(), value: 'ГХ'},
        {id: uuidv4(), value: 'ГХМ'},
        {id: uuidv4(), value: 'ГХС'},
        {id: uuidv4(), value: 'ГХИ'},
    ]
}


const propertiesSlice = createSlice({
        name: 'propertiesPumps',
        initialState,
        reducers: {
            newPump(state, action) {
                state.pump = action.payload
            }
        }
    }
)

export const {newPump} = propertiesSlice.actions;
export default propertiesSlice.reducer;