import './App.css';
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {newPump} from "./store/dataSlice";

function App() {
    const pumps = useSelector(state => state.propertiesPumps)
    const dispatch = useDispatch();
    function addPump(e) {
        dispatch(newPump(e.target.value))
    }
  return (
    <div className="App">
        <div>
            <label> Тип насоса:
                <select value={pumps.pump || ''} onChange={(e)=> addPump(e)}>
                    <option value='' disabled hidden>-выберите насос-</option>
                    {pumps.property.map(pump => <option key={pump.id} value={pump.value}>{pump.value}</option>)}
                </select>
            </label>
        </div>
    </div>
  );
}

export default App;
