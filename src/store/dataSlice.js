import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const ALL_PUMPS = 'ALL_PUMPS';
const GH = 'GH';
const GHM = 'GHM';
const GHI = 'GHI';
const GHS = 'GHS';
const VND = 'VND';
const AHI = 'AHI';
const AH = 'AH';
const AHM = 'AHM';



const initialState = [
    {
        id: uuidv4(),
        name: 'Подача, м3/ч: ',
        viewType: 'input',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'number'
    },
    {
        id: uuidv4(),
        name: 'Напор, м: ',
        viewType: 'input',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'number'
    },
    {
        id: uuidv4(),
        name: 'Код материала: ',
        viewType: 'select',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: ''},
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
        type: 'number'
    },
    {
        id: uuidv4(),
        name: 'Рабочая температура, град С (max): ',
        viewType: 'input',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'number'
    },
    {
        id: uuidv4(),
        name: 'Тип уплотнения: ',
        viewType: 'select',
        currentValue: '',
        application: [GH, GHM, GHI],
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
        application: [VND],
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
        application: [AH, AHM, 'HA(OH1)', 'HA(OH2)'],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: '-'},
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
        application: [GHI, VND, AHI, 'HA(VS4)'],
        type: 'number'
    },
    {
        id: uuidv4(),
        name: 'Опорная плита: ',
        viewType: 'select',
        currentValue: '',
        application: [GHI, VND, AHI, 'HA(VS4)'],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: ''},
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
            {id: uuidv4(), code: ''},
            {id: uuidv4(), code: 'Отсутствуют'},
            {id: uuidv4(), code: 'до 0,5% размером до 0,2мм'},
            {id: uuidv4(), code: 'до 1 % размером до 1 мм'},
        ]
    },
    {
        id: uuidv4(),
        name: 'Климатическое исполнение: ',
        viewType: 'select',
        currentValue: '',
        application: [ALL_PUMPS],
        type: 'string',
        selectOptions: [
            {id: uuidv4(), code: '', value: ''},
            {id: uuidv4(), code: "УХЛ3", value: '[-60...+40]'},
            {id: uuidv4(), code: 'У2.5', value: '[-45...+40]'},
            {id: uuidv4(), code: 'У1', value: '[-45...+40]'},
            {id: uuidv4(), code: 'УХЛ2', value: '[-60...+40]'},
            {id: uuidv4(), code: 'УХЛ1', value: '[-60...+40]'},
        ]
    },
    {
        id: uuidv4(),
        name: 'Высота всасывания, м: ',
        viewType: 'input',
        currentValue: '',
        application: [GHS],
        type: 'number'
    },
    {
        id: uuidv4(),
        name: 'Длина всасывающего трубопровода, м: ',
        viewType: 'input',
        currentValue: '',
        application: [GHS],
        type: 'number'
    },
    {
        id: uuidv4(),
        name: 'Диаметр всасывающего трубопровода, м: ',
        viewType: 'input',
        currentValue: '',
        application: [GHS],
        type: 'number'
    },
]


const propertiesSlice = createSlice({
        name: 'propertiesPumps',
        initialState,
        reducers: {}
    }
)

export const {} = propertiesSlice.actions;
export default propertiesSlice.reducer;