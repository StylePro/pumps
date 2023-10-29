import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {inputPropertiesPump, selectPropertiesPump} from "../../../store/dataPumpSlice";

const PumpSelectionParameters = () => {
    const pump = useSelector(state => state.pumps.currentPump.valueEng)     // undefined && строка
    const propertiesPumps = useSelector(state => state.propertiesPumps)
    const dispatch = useDispatch();
    console.log(propertiesPumps)


    function inputHandleChange(text, id) {
        dispatch(inputPropertiesPump({text, id}))
    }
    const handleChange = (text, id) => {
        dispatch(selectPropertiesPump({text, id}))
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
                    <div key={el.id}>
                        {el.viewType === 'input' &&
                            <div key={el.id}>
                                <label key={el.id}> {el.name}
                                    <input
                                        onChange={e => inputHandleChange(e.target.value, el.id)}
                                        value={el.currentValue}
                                        key={el.id}
                                        type={el.type}/>
                                </label>
                            </div>
                        }
                        {
                            el.viewType === 'select' &&
                            <div key={el.id}>
                                <label key={el.id}> {el.name}
                                    <select
                                        onChange={e=> handleChange(e.target.value, el.id)}
                                        value={'' || el.currentValue}
                                        key={el.id}>
                                        <option value='' hidden>--выберите опцию--</option>
                                        {el.selectOptions.map(el =>
                                            <option key={el.id} value={el.code}>{el.code}</option>)}
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

export default PumpSelectionParameters;
