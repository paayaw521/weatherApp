import React from 'react';
import Image, { ImageProps } from "next/image";

interface Props {
    temperature: number;
    icon: ImageProps;
    city: string;
}

export const CurrentWeatherCard: React.FC<Props> = ({ temperature, icon, city }) => {
    return (

            <div className="flex flex-col items-center">
                <h2 className="font-['Instrument_Serif'] text-4xl text-black mb-4">{city}</h2>
                <Image
                    src={icon.src}
                    alt={icon.alt || 'Current Weather Icon'}
                    width={icon.width || 500}
                    height={icon.height || 500}
                    className="w-40 h-40 mb-4"
                />
                <p className="font-['Instrument_Serif'] text-6xl text-black">
                    {temperature}°
                </p>
            </div>

    );
}