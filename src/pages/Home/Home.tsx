import { useAppContext } from '../../components/AppProvider';
import LocationSearch from '../../components/LocationSearch/LocationSearch';
import RecentLocations from '../../components/RecentLocations/RecentLocations';
import { RecentLocation } from '../../lib/types';
import './Home.css';

const Home = () => {
    const { recentLocations, removeRecentLocation, fetchWeather } =
        useAppContext();

    const handleRemoveRecentLocation = (location: RecentLocation) => {
        removeRecentLocation(location);
    };

    const handleLocationClick = (location: RecentLocation) => {
        fetchWeather(location.city);
    };

    return (
        <div className="home-container">
            <LocationSearch />
            <RecentLocations
                locations={recentLocations}
                onLocationClick={handleLocationClick}
                onRemoveLocation={handleRemoveRecentLocation}
            />
        </div>
    );
};

export default Home;
