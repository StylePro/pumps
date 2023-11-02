import React from 'react';
import PumpSelection from "./PumpSelection/PumpSelection";
import {useSelector} from "react-redux";
import SelectionOptions from "./SelectionOptions/SelectionOptions";

const Pump = () => {
    const pump = useSelector(state => state.pumps.currentPump.valueRus)
    return (
        <div>
            <PumpSelection/>
            {pump && <SelectionOptions/>}
        </div>
    );
};

export default Pump;