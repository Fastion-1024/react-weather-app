import LocationSearch from '../../components/LocationSearch/LocationSearch';
import TabContainer from '../../components/TabContainer/TabContainer';
import './WeeklyForecast.css';

const WeeklyForecast = () => {
    return (
        <main className="weekly-forecast-container">
            <LocationSearch />
            <TabContainer />
        </main>
    );
};

export default WeeklyForecast;
