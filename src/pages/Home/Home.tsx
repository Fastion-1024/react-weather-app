import { useAppContext } from '../../components/AppProvider';
import LocationSearch from '../../components/LocationSearch/LocationSearch';
import RecentLocations from '../../components/RecentLocations/RecentLocations';
import { RecentLocation } from '../../lib/types';

const Home = () => {
    const { recentLocations, removeRecentLocation } = useAppContext();

    const handleRemoveRecentLocation = (location: RecentLocation) => {
        removeRecentLocation(location);
    };

    return (
        <main>
            <LocationSearch />
            <RecentLocations
                locations={recentLocations}
                onRemoveLocation={handleRemoveRecentLocation}
            />
        </main>
    );
};

export default Home;
