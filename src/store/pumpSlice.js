import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

const initialState = {
    currentPump: {},
    typesOfPumps: [
        {id: uuidv4(), valueRus: 'ГХ', valueEng: 'GH'},
        {id: uuidv4(), valueRus: 'ГХМ', valueEng: 'GHM'},
        {id: uuidv4(), valueRus: 'ГХС', valueEng: 'GHS'},
        {id: uuidv4(), valueRus: 'ГХИ', valueEng: 'GHI'},
        {id: uuidv4(), valueRus: 'АХ', valueEng: 'AH'},
        {id: uuidv4(), valueRus: 'AХМ', valueEng: 'AHM'},
        {id: uuidv4(), valueRus: 'АХС', valueEng: 'AHS'},
        {id: uuidv4(), valueRus: 'АХИ', valueEng: 'AHI'},
        {id: uuidv4(), valueRus: 'НА(ОН1)', valueEng: 'HA(OH1)'},
        {id: uuidv4(), valueRus: 'НА(ОН2)', valueEng: 'HA(OH2)'},
        {id: uuidv4(), valueRus: 'НА(BB4)', valueEng: 'HA(BB4)'},
        {id: uuidv4(), valueRus: 'НА(VS4)', valueEng: 'HA(VS4)'},
    ]
}


export const pumpSlice = createSlice({
        name: 'pumps',
        initialState,
        reducers: {
            newPump(state, action) {
                state.currentPump = state.typesOfPumps.find(pump => pump.valueRus === action.payload)
            }
        }
    }
)

export const {newPump} = pumpSlice.actions;
export default pumpSlice.reducer;