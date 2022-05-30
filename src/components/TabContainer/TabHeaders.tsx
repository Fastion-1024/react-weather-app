import React, { useState } from 'react';
import { Forecast } from '../../lib/types';
import TabHeader from './TabHeader';

interface IProps {
    weeklyForecast: Forecast[];
    onTabHeaderClick: (index: number) => void;
}

const TabHeaders: React.FC<IProps> = ({ weeklyForecast, onTabHeaderClick }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const updateActiveTab = (index: number) => {
        setActiveTabIndex(index);
        onTabHeaderClick(index);
    };

    return (
        <section className="tab-headers-container">
            <ul className="tab-headers-list" role="list">
                {weeklyForecast?.map((forecast, index) => (
                    <TabHeader
                        key={index}
                        forecast={forecast}
                        isActive={index === activeTabIndex}
                        onTabHeaderClick={() => updateActiveTab(index)}
                    />
                ))}
            </ul>
        </section>
    );
};

export default TabHeaders;
