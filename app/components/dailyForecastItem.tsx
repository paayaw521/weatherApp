import React from 'react';
import Image, {ImageProps} from "next/image";

interface Props {
    day: string;
    highTemp: number;
    lowTemp: number;
    icon: ImageProps;
}

const DailyForecastItem: React.FC<Props> = ({day, highTemp, lowTemp, icon}) => {
    return (
        <div className="grid grid-cols-[200px_auto_auto] items-center gap-x-8">
            <p className="font-['Instrument_Serif'] text-5xl text-black">{day}</p>
            <Image
                src={icon.src}
                alt={icon.alt || 'Weather Icon'}
                width={icon.width || 500}
                height={icon.height || 500}
                className="w-30 h-30"
            />
            <div className="font-['Instrument_Serif'] text-5xl text-black">
                <span>{highTemp}°</span>
                <span className="ml-2">{lowTemp}°</span>
            </div>
        </div>
    );
}

export default DailyForecastItem;