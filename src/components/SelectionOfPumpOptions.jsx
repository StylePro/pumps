import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addInput, addSelect} from "../store/dataSlice";


const SelectionOfPumpOptions = () => {

    const pump = useSelector(state => state.pumps.currentPump.valueEng)     // undefined && строка
    const propertiesPumps = useSelector(state => state.propertiesPumps)
    const dispatch = useDispatch();
    console.log(propertiesPumps)


    function inputHandler(text, id) {
        dispatch(addInput({text, id}))
    }
    const handleChange = (text, id) => {
        dispatch(addSelect({text, id}))
    }


    function filterProperties(array) {
        const one = array.map(el => el.application.includes('ALL_PUMPS') && el)
        const two = array.map(el => el.application.includes(pump) && el)             // Проверить
        return [...one, ...two]
    }



    return (
        <div>
            {filterProperties(propertiesPumps).map(el => {
                return (
                    <div key={el.key}>
                        {el.viewType === 'input' &&
                            <div key={el.key}>
                                <label key={el.key}> {el.name}
                                    <input
                                        onChange={e => inputHandler(e.target.value, el.id)}
                                        value={el.currentValue}
                                        key={el.key}
                                        type={el.type}/>
                                </label>
                            </div>
                        }
                        {
                            el.viewType === 'select' &&
                            <div key={el.key}>
                                <label key={el.key}> {el.name}
                                    <select
                                        onChange={e=> handleChange(e.target.value, el.id)}
                                        value={'' || el.currentValue}
                                        key={el.key}>
                                        <option value='' hidden>--выберите опцию--</option>
                                        {el.selectOptions.map(el =>
                                            <option id = {el.id} key={el.key} value={el.code}>{el.code}</option>)}
                                    </select>
                                </label>
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    );
};

export default SelectionOfPumpOptions;