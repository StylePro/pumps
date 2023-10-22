import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

const initialState = {
    currentPump: '',
    typesOfPumps: [
        {id: uuidv4(), value: 'ГХ'},
        {id: uuidv4(), value: 'ГХМ'},
        {id: uuidv4(), value: 'ГХС'},
        {id: uuidv4(), value: 'ГХИ'},
    ]
}


export const pumpSlice = createSlice({
        name: 'pumps',
        initialState,
        reducers: {
            newPump(state, action) {
                state.currentPump = action.payload
            }
        }
    }
)

export const {newPump} = pumpSlice.actions;
export default pumpSlice.reducer;