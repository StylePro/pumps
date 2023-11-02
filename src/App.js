import './App.css';
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayOut from "./components/MainLayOut/MainLayOut";
import GeneratePump from "./components/GeneratePump/GeneratePump";
import Pump from "./components/Pump/Pump";
import ElectricMotor from "./components/Pump/SelectionOptions/ElectricMotor/ElectricMotor";
import React from "react";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
               <Routes>
                   <Route path='/' element={<MainLayOut/>}>
                       <Route index element={<Pump/>}/>
                       <Route path='electricmotor' element={<ElectricMotor/>}/>
                       <Route path='generatepump' element={<GeneratePump/>}/>
                   </Route>
               </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
