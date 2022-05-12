import { useAppContext } from './AppProvider';
import { Home, WeeklyForecast } from '../pages';
import './App.css';

function App() {
    const { weeklyForecast } = useAppContext();
    return <>{!weeklyForecast ? <Home /> : <WeeklyForecast />}</>;
}

export default App;
