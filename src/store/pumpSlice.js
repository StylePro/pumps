import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    pump: ''
}


export const pumpSlice = createSlice({
        name: 'pump',
        initialState,
        reducers: {

        }
    }
)

export const {} = pumpSlice.actions;
export default pumpSlice.reducer;