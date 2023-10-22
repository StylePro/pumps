import './App.css';
import './index.css'
import PumpSelection from "./PumpSelection";
import SelectionOfPumpOptions from "./SelectionOfPumpOptions";

function App() {

    return (
        <div className="App">
            <div>
                <PumpSelection/>
                <SelectionOfPumpOptions/>
            </div>
        </div>
    );
}

export default App;
