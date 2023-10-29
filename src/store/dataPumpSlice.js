import {createSlice, current} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

export const ALL_PUMPS = 'ALL_PUMPS';
export const GH_PUMPS = 'GH';
export const GHM_PUMPS = 'GHM';
export const GHI_PUMPS = 'GHI';
export const GHS_PUMPS = 'GHS';
export const VND_PUMPS = 'VND';
export const AHI_PUMPS = 'AHI';
export const AH_PUMPS = 'AH';
export const AHM_PUMPS = 'AHM';
export const AHS_PUMPS = 'AHS';
export const HA_VS4_PUMPS = 'НА(VS4)';
export const HA_OH1_PUMPS = 'НА(OH1)';
export const HA_OH2_PUMPS = 'НА(OH2)';
export const HA_BB4_PUMPS = 'НА(BB4)';





const initialState = [
    {
        id: uuidv4(),
        name: 'Подача, м3/ч: ',
        viewType: 'input',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'number',
    },
    {
        id: uuidv4(),
        name: 'Напор, м: ',
        viewType: 'input',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'number',
    },
    {
        id: uuidv4(),
        name: 'Код материала: ',
        viewType: 'select',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: '13'},
            {id: uuidv4(), code: '14'},
            {id: uuidv4(), code: '02'},
            {id: uuidv4(), code: '82'},
            {id: uuidv4(), code: '85'},
        ]
    },
    {
        id: uuidv4(),
        name: 'Плотность, кг/м3: ',
        viewType: 'input',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'number',
    },
    {
        id: uuidv4(),
        name: 'Рабочая температура, град С (max): ',
        viewType: 'input',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'number',
    },
    {
        id: uuidv4(),
        name: 'Тип уплотнения: ',
        viewType: 'select',
        currentValue: '',
        application: [GH_PUMPS, GHM_PUMPS, GHI_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: 'Герметичный экран'},
        ]
    },
    {
        id: uuidv4(),
        name: 'Тип уплотнения: ',
        viewType: 'select',
        currentValue: '',
        application: [AHI_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: 'Масляный затвор'},
            {id: uuidv4(), code: 'Манжета'},
        ]
    },
    {
        id: uuidv4(),
        name: 'Тип уплотнения: ',
        viewType: 'select',
        currentValue: '',
        application: [VND_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: 'Два одинарных торцовых, установленных по схеме "Тандем"'},
            {id: uuidv4(), code: 'Четыре одинарных торцовых, установленных по схеме "Тандем"'},
        ]
    },
    {
        id: uuidv4(),
        name: 'Тип уплотнения: ',
        viewType: 'select',
        currentValue: '',
        application: [AH_PUMPS, AHM_PUMPS, HA_OH1_PUMPS, HA_OH2_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: 'Сальниковое'},
            {id: uuidv4(), code: 'Одинарное торцовое'},
            {id: uuidv4(), code: 'Двойное торцовое'},
            {id: uuidv4(), code: 'Стояночное гидродинамическое'},
        ]
    },
    {
        id: uuidv4(),
        name: 'Глубина погружения, м: ',
        viewType: 'input',
        currentValue: '',
        application: [GHI_PUMPS, VND_PUMPS, AHI_PUMPS, HA_VS4_PUMPS],
        type: 'number',
    },
    {
        id: uuidv4(),
        name: 'Опорная плита: ',
        viewType: 'select',
        currentValue: '',
        application: [GHI_PUMPS, VND_PUMPS, AHI_PUMPS, HA_VS4_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: '600-6-01-1-B'},
            {id: uuidv4(), code: '700-6-01-1-B'},
            {id: uuidv4(), code: '800-6-01-1-B'},
        ]
    },
    {
        id: uuidv4(),
        name: 'Твердые частицы: ',
        viewType: 'select',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: 'Отсутствуют'},
            {id: uuidv4(), code: 'до 0,5% размером до 0,2мм'},
            {id: uuidv4(), code: 'до 1 % размером до 1 мм'},
        ]
    },

    {
        id: uuidv4(),
        name: 'Высота всасывания, м: ',
        viewType: 'input',
        currentValue: '',
        application: [GHS_PUMPS],
        type: 'number',
    },
    {
        id: uuidv4(),
        name: 'Длина всасывающего трубопровода, м: ',
        viewType: 'input',
        currentValue: '',
        application: [GHS_PUMPS],
        type: 'number',
    },
    {
        id: uuidv4(),
        name: 'Диаметр всасывающего трубопровода, м: ',
        viewType: 'input',
        currentValue: '',
        application: [GHS_PUMPS],
        type: 'number',
    },
]


const propertiesSlice = createSlice({
        name: 'propertiesPumps',
        initialState,
        reducers: {
            inputPropertiesPump(state, action) {
                const {text, id} = action.payload
                const newText = state.find(el=> el.id === id)
                newText.currentValue = text
            },
            selectPropertiesPump (state, action) {
                const {text, id} = action.payload
                const newSelect = state.find(el=> el.id === id)
                newSelect.currentValue = text
            },
            clearCurrentValue (state, action) {
                return state.map(el=> el.currentValue !== '' ? {...el, currentValue: ''}: el)
            }
        }
    }
)

export const {
    inputPropertiesPump,
    selectPropertiesPump,
    clearCurrentValue} = propertiesSlice.actions;
export default propertiesSlice.reducer;