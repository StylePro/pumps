import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectPropertiesElectricMotor} from "../../../../store/dataElectricMotorSlice";



const ElectricMotorSelectionParameters = () => {

    const properties = useSelector(state => state.propertiesElectricMotor)
    const dispatch = useDispatch()

    function electricHandleChange (text, id) {
        dispatch(selectPropertiesElectricMotor({text, id}))
    }


    return (
        <div>
            {properties.map(el=> {
                return (
                    <div key={el.id}>
                        {el.viewType === 'input' &&
                            <div key={el.id}>
                                <label key={el.id}> {el.name}
                                    <input
                                        onChange={()=> console.log('1')}
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
                                        onChange={e=> electricHandleChange(e.target.value, el.id)}
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
            <button>Очистить</button>
            <button>Далее</button>
        </div>
    );
};

export default ElectricMotorSelectionParameters;