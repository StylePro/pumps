import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    property: ''
}


const propertiesSlice = createSlice({
        name: 'propertiesPumps',
        initialState,
        reducers: {

        }
    }
)

export const {} = propertiesSlice.actions;
export default propertiesSlice.reducer;