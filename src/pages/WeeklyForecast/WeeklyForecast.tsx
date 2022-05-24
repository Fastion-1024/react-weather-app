import LocationSearch from '../../components/LocationSearch/LocationSearch';
import TabContainer from '../../components/TabContainer/TabContainer';
import './WeeklyForecast.css';

const WeeklyForecast = () => {
    return (
        <div className="weekly-forecast-container">
            <LocationSearch />
            <TabContainer />
        </div>
    );
};

export default WeeklyForecast;
