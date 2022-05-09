import SearchBar from './SearchBar/SearchBar';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import { useAppContext } from './AppProvider';
import './App.css';

function App() {
    return (
        <main>
            <SearchBar />
            <WeatherContainer />
        </main>
    );
}

export default App;
