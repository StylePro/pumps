import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const ALL_PUMPS = 'ALL_PUMPS';
const GHI = 'GHI';


const initialState = [
    {id: uuidv4(), currentValue: '', name: 'Подача, м3/ч:', type: 'input', pumpsOptions: 'ГХ'},
    {id: uuidv4(), currentValue: '', name: 'Глубина погружения, м:', type: 'input', pumpsOptions: GHI},
]


const propertiesSlice = createSlice({
        name: 'propertiesPumps',
        initialState,
        reducers: {

        }
    }
)

export const {} = propertiesSlice.actions;
export default propertiesSlice.reducer;