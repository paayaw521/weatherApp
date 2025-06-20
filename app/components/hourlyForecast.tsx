import React from 'react';
import HourlyForecastItem from './hourlyForecastItem';
import {ImageProps} from "next/image"; // Capital H

interface HourData {  //
    time: string;
    temperature: number;
    icon: ImageProps;
}

interface HourlyForecastProps {
    hourlyData: HourData[];
}

export const HourlyForecast: React.FC<HourlyForecastProps> = ({hourlyData}) => {
    return (
        <div className="flex flex-col items-center font-['Instrument_Serif']">
            <h2 className="text-5xl font-semibold mb-4 text-black font-['Instrument_Serif'] text-center">Hourly Forecast</h2>
            <div className="flex overflow-x-auto gap-4 bg-[#93DAD4] rounded-[15px] p-4 shadow-md text-black relative">
                <div className="absolute inset-0 bg-[/R] opacity-50 mix-blend-soft-light pointer-events-none"></div>
                {hourlyData.map((data, index) => (
                    <HourlyForecastItem
                        key={index}
                        time={data.time}
                        temperature={data.temperature}
                        icon={data.icon}
                    />
                ))}
            </div>
        </div>
    );
};