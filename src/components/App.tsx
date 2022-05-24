import { useAppContext } from './AppProvider';
import { Home, WeeklyForecast } from '../pages';
import './App.css';

function App() {
    const { weeklyForecast } = useAppContext();
    return <main>{!weeklyForecast ? <Home /> : <WeeklyForecast />}</main>;
}

export default App;
