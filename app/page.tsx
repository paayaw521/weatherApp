'use client';
import React, { useState } from 'react';
import { HourlyForecast } from './components/hourlyForecast';
import { DailyForecast } from './components/dailyForecast';
import { CurrentWeatherCard } from './components/WeatherCard';
import { TemperatureToggle } from './components/TemperatureToggle';
import { useWeather } from "@/app/components/api";
import { getWeatherIcon } from './components/api';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const celsiusToFahrenheit = (celsius: number) => Math.round((celsius * 9/5) + 32);

export default function Page() {
    const [isCelsius, setIsCelsius] = useState(true);
    const {weather, loading, error} = useWeather();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!weather) return <div>No weather data</div>;

    const convertTemp = (temp: number) => {
        if (isCelsius) {
            return temp;
        } else {
            return celsiusToFahrenheit(temp);
        }
    };
    // Current weather
    const currentWeather = {
        temperature: convertTemp(Math.round(weather.list[0].main.temp)),
        icon: {
            src: getWeatherIcon(weather.list[0].weather[0].description),
            alt: weather.list[0].weather[0].description,
            width: 50,
            height: 50
        },
        city: weather.city.name
    };

    // Hourly data
    const hourlyData = weather.list.slice(0, 5).map(item => ({
        time: new Date(item.dt * 1000).getHours() + ":00",
        temperature: convertTemp(Math.round(item.main.temp)),
        icon: {
            src: getWeatherIcon(item.weather[0].description),
            alt: item.weather[0].description,
            width: 50,
            height: 50
        }
    }));

    // Daily data
    const dailyData = Array.from({ length: 5 }, (_, dayIndex) => {
        const startIndex = dayIndex * 8;
        const dayReadings = weather.list.slice(startIndex, startIndex + 8);
        const date = new Date(dayReadings[0].dt * 1000);

        const temperatures = dayReadings.map(item => item.main.temp);
        const highTemp = convertTemp(Math.round(Math.max(...temperatures)));
        const lowTemp = convertTemp(Math.round(Math.min(...temperatures)));

        return {
            day: dayIndex === 0 ? 'Today' : days[date.getDay()],
            highTemp,
            lowTemp,
            icon: {
                src: getWeatherIcon(dayReadings[0].weather[0].description),
                alt: dayReadings[0].weather[0].description,
                width: 50,
                height: 50
            }
        };
    });

    return (
        <main className="min-h-screen p-4 md:p-10">
            <TemperatureToggle
                isCelsius={isCelsius}
                onToggle={() => setIsCelsius(!isCelsius)}
            />
            <div className="container mx-auto content-center max-w-4xl space-y-6 md:space-y-12 flex flex-col items-center">
                <CurrentWeatherCard {...currentWeather} />
                <HourlyForecast hourlyData={hourlyData}/>
                <DailyForecast dailyData={dailyData}/>
            </div>
        </main>
    );
}