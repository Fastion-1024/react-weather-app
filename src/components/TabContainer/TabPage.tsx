import React from 'react';
import { Forecast } from '../../lib/types';
import DailyForecast from '../DailyForecast/DailyForecast';

interface IProps {
    dailyForecast: Forecast;
}

const TabPage: React.FC<IProps> = ({ dailyForecast }) => {
    return (
        <section className="tab-page-container">
            <DailyForecast dailyForecast={dailyForecast} />
        </section>
    );
};

export default TabPage;
