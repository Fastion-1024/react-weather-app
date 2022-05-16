import { useAppContext } from '../AppProvider';
import TabHeaders from './TabHeaders';
import TabPage from './TabPage';
import './TabContainer.css';

const TabContainer = () => {
    const { weeklyForecast, updateActiveCard } = useAppContext();

    const handleTabHeaderClick = (index: number) => {
        updateActiveCard(index);
    };

    if (!weeklyForecast) return null;

    return (
        <div className="tab-container">
            <TabHeaders
                weeklyForecast={weeklyForecast.forecast}
                onTabHeaderClick={handleTabHeaderClick}
            />
            <TabPage dailyForecast={weeklyForecast.current} />
        </div>
    );
};

export default TabContainer;
