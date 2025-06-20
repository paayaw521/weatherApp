import React from 'react';

interface Props {
    isCelsius: boolean;
    onToggle: () => void;
}

export const TemperatureToggle: React.FC<Props> = ({ isCelsius, onToggle }) => {
    const getUnit = () => {
        if (isCelsius) {
            return '°C';
        } else {
            return '°F';
        }
    };

    return (
        <button
            onClick={onToggle}
            className="fixed top-4 right-4 bg-black text-white rounded-full py-2 px-4 text-sm font-medium"
        >
            {getUnit()}
        </button>
    );
};