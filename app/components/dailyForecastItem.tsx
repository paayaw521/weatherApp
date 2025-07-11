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
        <div className="grid grid-cols-[120px_auto_auto] md:grid-cols-[200px_auto_auto] items-center gap-x-4 md:gap-x-8">
            <p className="font-['Instrument_Serif'] text-2xl md:text-5xl text-black">{day}</p>
            <Image
                src={icon.src}
                alt={icon.alt || 'Weather Icon'}
                width={icon.width || 500}
                height={icon.height || 500}
                className="w-16 h-16 md:w-30 md:h-30"
            />
            <div className="font-['Instrument_Serif'] text-2xl md:text-5xl text-black">
                <span>{highTemp}°</span>
                <span className="ml-2">{lowTemp}°</span>
            </div>
        </div>
    );
}

export default DailyForecastItem;