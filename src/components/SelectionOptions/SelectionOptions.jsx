import React from 'react';
import PumpSelectionParameters from "./PumpSelectionParameters/PumpSelectionParameters";
import ElectricMotor from "./ElectricMotor/ElectricMotor";


const SelectionOptions = () => {

    return (
       <div>
           <PumpSelectionParameters/>
           <ElectricMotor/>
       </div>
    );
};

export default SelectionOptions;