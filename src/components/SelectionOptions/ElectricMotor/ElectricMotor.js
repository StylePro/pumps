import React from 'react';
import ElectricMotorSelectionParameters from "../ElectricMotorSelectionParameters/ElectricMotorSelectionParameters";
import {useDispatch, useSelector} from "react-redux";
import {addDataElectricMotor} from "../../../store/availabilityMotorElectric";
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