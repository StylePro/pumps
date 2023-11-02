import React from 'react';
import ElectricMotorSelectionParameters from "../ElectricMotorSelectionParameters/ElectricMotorSelectionParameters";
import {useSelector} from "react-redux";

import SelectMotor from "./SelectMotor/SelectMotor";

const ElectricMotor = () => {

    const {engineAvailability} = useSelector(state=> state.availabilityMotorElectric)

    return (
        <div>
            <SelectMotor/>
            {engineAvailability.source && <ElectricMotorSelectionParameters/>}
        </div>
    );
};

export default ElectricMotor;