import './App.css';
import './index.css'
import PumpSelection from "./components/PumpSelection/PumpSelection";
import SelectionOfPumpOptions from "./components/SelectionOfPumpOptions";
import {useSelector} from "react-redux";
import Nav from "./components/Nav/Nav";

function App() {
    const pump = useSelector(state => state.pumps.currentPump.valueRus)
    return (
        <div className="App">
            <Nav/>
            <PumpSelection/>
            {pump && <SelectionOfPumpOptions/>}
        </div>
    );
}

export default App;
