import React from 'react';
import Image, {ImageProps} from "next/image";

interface Props {
    time: string;
    temperature: number;
    icon: ImageProps;
}

const hourlyForecastItem: React.FC<Props> = ({time, temperature, icon}) => {
    return (
        <div className="flex flex-col items-center">
            <p className="font-['Instrument_Serif'] text-2xl md:text-5xl text-black">{time}</p>
            <Image
                src={icon.src}
                alt={icon.alt || 'Weather Icon'}
                width={icon.width || 500}
                height={icon.height || 500}
                className="w-16 h-16 md:w-30 md:h-30 mb-1 md:mb-2"
            />
            <p className="font-['Instrument_Serif'] text-2xl md:text-5xl text-black">{temperature}°</p>
        </div>
    );
}

export default hourlyForecastItem;
