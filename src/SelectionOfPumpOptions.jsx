import React from 'react';
import {useSelector} from "react-redux";

const SelectionOfPumpOptions = () => {
    const pump = useSelector(state=> state.pumps.currentPump)
    const propertiesPumps = useSelector(state=> state.propertiesPumps)
    console.log(propertiesPumps)
    const newPropertiesPumps = propertiesPumps.filter (property => property.pumpsOptions === pump  )
    return (
        <div>
            {newPropertiesPumps.map(proprty=> <div key={proprty.id}>{proprty.name}</div>)}
        </div>
    );
};

export default SelectionOfPumpOptions;