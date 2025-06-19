'use client';
import React from 'react';
import { HourlyForecast } from './components/hourlyForecast';
import { DailyForecast } from './components/dailyForecast';
import { CurrentWeatherCard } from './components/WeatherCard';

const hourlyData = [
    {
        time: 'NOW',
        temperature: 28,
        icon: {
            src: '/icons/sunny.svg',
            alt: 'Sunny',
            width: 50,
            height: 50
        }
    },
    {
        time: '1 PM',
        temperature: 29,
        icon: {
            src: '/icons/sunny.svg',
            alt: 'Sunny',
            width: 50,
            height: 50
        }
    },
    {
        time: '2 PM',
        temperature: 30,
        icon: {
            src: '/icons/partly-cloudy.svg',
            alt: 'Partly Cloudy',
            width: 50,
            height: 50
        }
    },
    {
        time: '3 PM',
        temperature: 29,
        icon: {
            src: '/icons/cloudy.svg',
            alt: 'Cloudy',
            width: 50,
            height: 50
        }
    },
    {
        time: '4 PM',
        temperature: 28,
        icon: {
            src: '/icons/cloudy.svg',
            alt: 'Cloudy',
            width: 50,
            height: 50
        }
    },
    {
        time: '5 PM',
        temperature: 27,
        icon: {
            src: '/icons/partly-cloudy.svg',
            alt: 'Partly Cloudy',
            width: 50,
            height: 50
        }
    }
];

const dailyData = [
    {
        day: "Monday",
        highTemp: 31,
        lowTemp: 26,
        icon: {
            src: '/icons/sunny.svg',
            alt: 'Sunny',
            width: 50,
            height: 50
        }
    },
    {
        day: "Tuesday",
        highTemp: 30,
        lowTemp: 25,
        icon: {
            src: '/icons/partly-cloudy.svg',
            alt: 'Partly Cloudy',
            width: 50,
            height: 50
        }
    },
    {
        day: "Wednesday",
        highTemp: 29,
        lowTemp: 24,
        icon: {
            src: '/icons/cloudy.svg',
            alt: 'Cloudy',
            width: 50,
            height: 50
        }
    },
    {
        day: "Thursday",
        highTemp: 28,
        lowTemp: 23,
        icon: {
            src: '/icons/sunny.svg',
            alt: 'Rain',
            width: 50,
            height: 50
        }
    },
    {
        day: "Friday",
        highTemp: 27,
        lowTemp: 22,
        icon: {
            src: '/icons/partly-cloudy.svg',
            alt: 'Partly Cloudy',
            width: 50,
            height: 50
        }
    }
];

export default function Page() {
    return (
        <main className="min-h-screen p-8">
            <div className="container mx-auto max-w-4xl space-y-8">
                <CurrentWeatherCard
                    temperature={28}
                    icon={{
                        src: '/icons/sunny.svg',
                        alt: 'Sunny weather',
                        width: 50,
                        height: 50
                    }}
                    city="London"
                />
                <HourlyForecast hourlyData={hourlyData} />
                <DailyForecast dailyData={dailyData} />
            </div>
        </main>
    );
}