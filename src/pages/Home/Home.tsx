import LocationSearch from '../../components/LocationSearch/LocationSearch';
import RecentLocations from '../../components/RecentLocations/RecentLocations';
import { City } from '../../lib/types';

const Home = () => {
    const dummyData: City[] = [
        {
            country: 'GB',
            lat: '52.0553813',
            lon: '-2.7151735',
            name: 'Hereford',
            state: 'England',
        },
        {
            country: 'GB',
            lat: '52.0553813',
            lon: '-2.7151735',
            name: 'Hereford',
            state: 'England',
        },
        {
            country: 'GB',
            lat: '52.0553813',
            lon: '-2.7151735',
            name: 'Hereford',
            state: 'England',
        },
        {
            country: 'GB',
            lat: '52.0553813',
            lon: '-2.7151735',
            name: 'Hereford',
            state: 'England',
        },
    ];

    const handleRemoveRecentLocation = (city: City) => {
        console.log('removing location:-', city.name);
    };

    return (
        <main>
            <LocationSearch />
            <RecentLocations
                locations={dummyData}
                onRemoveLocation={handleRemoveRecentLocation}
            />
        </main>
    );
};

export default Home;
