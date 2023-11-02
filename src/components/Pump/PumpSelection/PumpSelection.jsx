import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {newPump} from "../../../store/pumpSlice";
import styles from './PumpSelection.module.css'
import {clearCurrentValue} from "../../../store/dataPumpSlice";

const PumpSelection = () => {
    const {currentPump, typesOfPumps} = useSelector(state => state.pumps)
    const dispatch = useDispatch();

    function addPump(value) {
        dispatch(clearCurrentValue())
        return dispatch(newPump(value))
    }

    return (
        <div className={styles.item}>
            <label> Выберите насос:
                <select value={currentPump.valueRus || ''} onChange={(e) => addPump(e.target.value)}>
                    <option value='' disabled hidden>-option-</option>
                    {typesOfPumps.map(pump => <option key={pump.id} value={pump.valueRus}>{pump.valueRus}</option>)}
                </select>
            </label>
        </div>
    );
};

export default PumpSelection;