import React from 'react';
import DailyForecastItem from './dailyForecastItem';
import {ImageProps} from "next/image";


interface DailyForecastData {
    day: string;
    highTemp: number;
    lowTemp: number;
    icon: ImageProps; // Assuming icon is an ImageProps type
}

export const DailyForecast: React.FC<{ dailyData: Array<{day: string; highTemp: number; lowTemp: number; icon: ImageProps}> }> = ({dailyData}) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 text-black font-['Instrument_Serif'] text-center">Daily Forecast</h2>
            <div className="bg-[#93DAD4] rounded-xl p-8 w-full">

                <div className="flex flex-col divide-y divide-black">
                    {dailyData.map((data, index) => (
                        <DailyForecastItem
                            key={index}
                            day={data.day}
                            highTemp={data.highTemp}
                            lowTemp={data.lowTemp}
                            icon={data.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};