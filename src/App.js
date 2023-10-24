import './App.css';
import './index.css'
import PumpSelection from "./PumpSelection";
import SelectionOfPumpOptions from "./SelectionOfPumpOptions";
import {useSelector} from "react-redux";

function App() {
    const pump = useSelector(state=> state.pumps.currentPump.valueRus)
    return (
        <div className="App">
            <div>
                <PumpSelection/>
                {pump && <SelectionOfPumpOptions/>}
            </div>
        </div>
    );
}

export default App;
