import React from 'react';
import PumpSelectionParameters from "./PumpSelectionParameters/PumpSelectionParameters";
import ElectricMotorSelectionParameters from "./ElectricMotorSelectionParameters/ElectricMotorSelectionParameters";


const SelectionOptions = () => {

    return (
       <div>
           <PumpSelectionParameters/>
           <ElectricMotorSelectionParameters/>
       </div>
    );
};

export default SelectionOptions;