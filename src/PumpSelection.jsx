import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {newPump} from "./store/pumpSlice";

const PumpSelection = () => {
    const pumps = useSelector(state => state.pumps)
    const dispatch = useDispatch();

    function addPump(e) {
        dispatch(newPump(e.target.value))
    }

    return (
        <div>
            <label> Тип насоса:
                <select value={pumps.currentPump || ''} onChange={(e)=> addPump(e)}>
                    <option value='' disabled hidden>-выберите насос-</option>
                    {pumps.typesOfPumps.map(pump => <option key={pump.id} value={pump.value}>{pump.value}</option>)}
                </select>
            </label>
        </div>
    );
};

export default PumpSelection;