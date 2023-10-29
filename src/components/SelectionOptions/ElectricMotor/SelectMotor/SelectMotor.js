import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addDataElectricMotor} from "../../../../store/availabilityMotorElectric";

const SelectMotor = () => {


    const {engineAvailability, typesOfValue} = useSelector(state=> state.availabilityMotorElectric)
    const dispatch = useDispatch()
    function selectChangeHandler (e) {
        return dispatch(addDataElectricMotor(e.target.value))
    }
    return (
        <div>
            <label> Наличие электродвигателя:
                <select
                    value={engineAvailability.value || ''}
                    onChange={selectChangeHandler}
                >
                    <option value='' disabled hidden>-выберите опцию-</option>
                    {typesOfValue.map(el=> <option value={el.value}>{el.value}</option>)}
                </select>
            </label>
        </div>
    );
};

export default SelectMotor;