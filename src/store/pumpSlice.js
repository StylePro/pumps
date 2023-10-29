import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";
import {
    AH_PUMPS,
    AHI_PUMPS,
    AHM_PUMPS,
    AHS_PUMPS,
    GH_PUMPS,
    GHI_PUMPS,
    GHM_PUMPS,
    GHS_PUMPS, HA_BB4_PUMPS,
    HA_OH1_PUMPS, HA_OH2_PUMPS, HA_VS4_PUMPS
} from "./dataPumpSlice";


const initialState = {
    currentPump: {},
    typesOfPumps: [
        {id: uuidv4(), valueRus: 'ГХ', valueConst: GH_PUMPS},
        {id: uuidv4(), valueRus: 'ГХМ', valueEng: GHM_PUMPS},
        {id: uuidv4(), valueRus: 'ГХС', valueEng: GHS_PUMPS},
        {id: uuidv4(), valueRus: 'ГХИ', valueEng: GHI_PUMPS},
        {id: uuidv4(), valueRus: 'АХ', valueEng: AH_PUMPS},
        {id: uuidv4(), valueRus: 'AХМ', valueEng: AHM_PUMPS},
        {id: uuidv4(), valueRus: 'АХС', valueEng: AHS_PUMPS},
        {id: uuidv4(), valueRus: 'АХИ', valueEng: AHI_PUMPS},
        {id: uuidv4(), valueRus: 'НА(ОН1)', valueEng: HA_OH1_PUMPS},
        {id: uuidv4(), valueRus: 'НА(ОН2)', valueEng: HA_OH2_PUMPS},
        {id: uuidv4(), valueRus: 'НА(BB4)', valueEng: HA_BB4_PUMPS},
        {id: uuidv4(), valueRus: 'НА(VS4)', valueEng: HA_VS4_PUMPS},
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

export const {
    newPump} = pumpSlice.actions;
export default pumpSlice.reducer;