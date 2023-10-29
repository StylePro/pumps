import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';
import {ALL_PUMPS} from "./dataPumpSlice";






const initialState = [
    {
        id: uuidv4(),
        name: 'Климатическое исполнение: ',
        viewType: 'select',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: "УХЛ3", value: '[-60...+40]'},
            {id: uuidv4(), code: 'У2.5', value: '[-45...+40]'},
            {id: uuidv4(), code: 'У1', value: '[-45...+40]'},
            {id: uuidv4(), code: 'УХЛ2', value: '[-60...+40]'},
            {id: uuidv4(), code: 'УХЛ1', value: '[-60...+40]'},
        ]
    },
    {
        id: uuidv4(),
        name: 'Наличие взрывозащиты: ',
        viewType: 'select',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: "Да"},
            {id: uuidv4(), code: 'Нет'},
        ]
    },
    {
        id: uuidv4(),
        name: 'Монтажное исполнение: ',
        viewType: 'select',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: "IM1001"},
            {id: uuidv4(), code: 'IM2001'},
            {id: uuidv4(), code: 'IM3011'},
        ]
    },
    {
        id: uuidv4(),
        name: 'Пыле-влогозащита: ',
        viewType: 'select',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: "IP54"},
            {id: uuidv4(), code: 'IP55'},
            {id: uuidv4(), code: 'IM56'},
            {id: uuidv4(), code: 'IM65'},
        ]
    },
]


const propertiesElectricMotorSlice = createSlice({
        name: 'propertiesElectricMotor',
        initialState,
        reducers: {
            selectPropertiesElectricMotor(state, action) {
                const {text, id} = action.payload
                console.log(text, id)
                const newText = state.find(el=> el.id === id)
                newText.currentValue = text
            },
           /* addInput(state, action) {
                const {text, id} = action.payload
                const newText = state.find(el=> el.id === id)
                newText.currentValue = text
            },
            addSelect (state, action) {
                const {text, id} = action.payload
                const newSelect = state.find(el=> el.id === id)
                newSelect.currentValue = text
            }*/
        }
    }
)

export const {selectPropertiesElectricMotor} = propertiesElectricMotorSlice.actions;
export default propertiesElectricMotorSlice.reducer;