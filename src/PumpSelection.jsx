import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {newPump} from "./store/pumpSlice";

const PumpSelection = () => {
    const {currentPump, typesOfPumps} = useSelector(state => state.pumps)
    const dispatch = useDispatch();
console.log(currentPump, typesOfPumps)
    function addPump(value) {
          return dispatch(newPump(value))
    }

    return (
        <div>
            <label> Тип насоса:
                <select value={currentPump.valueRus || ''} onChange={(e)=> addPump(e.target.value)}>
                    <option value='' disabled hidden>-выберите насос-</option>
                    {typesOfPumps.map(pump => <option key={pump.id} value={pump.valueRus}>{pump.valueRus}</option>)}
                </select>
            </label>
        </div>
    );
};

export default PumpSelection;