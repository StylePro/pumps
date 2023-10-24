import React from 'react';
import {useSelector} from "react-redux";


const SelectionOfPumpOptions = () => {

    const pump = useSelector(state => state.pumps.currentPump.valueEng)     // undefined && строка
    const propertiesPumps = useSelector(state => state.propertiesPumps)
    console.log(`propertiesPumps: ${propertiesPumps}`)
    console.log(pump)

    function filterProperties(array) {
        const one = array.map(el => el.application.includes('ALL_PUMPS') && el)
        const two = array.map(el => el.application.includes(pump) && el)
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
                                    <input key={el.key} type={el.type}/>
                                </label>
                            </div>
                        }
                        {
                            el.viewType === 'select' &&
                            <div key={el.key}>
                                <label key={el.key}> {el.name}
                                    <select key={el.key}>
                                        {el.selectOptions.map(el => <option key={el.key} value={el.code}>{el.code}</option>)}
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