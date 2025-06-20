'use client';
import React from 'react';
import { HourlyForecast } from './components/hourlyForecast';
import { DailyForecast } from './components/dailyForecast';
import { CurrentWeatherCard } from './components/WeatherCard';
import {useWeather} from "@/app/components/api";
import { getWeatherIcon } from './components/api';



export default function Page() {
    const {weather, loading, error} = useWeather();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!weather) return <div>No weather data</div>;

    // Format current weather data
    const currentWeather = {
        temperature: Math.round(weather.main.temp),
        icon: {
            src: getWeatherIcon(weather.weather[0].main),
            alt: weather.weather[0].description,
            width: 50,
            height: 50
        },
        city: weather.name
    };

    const hourlyData = [{
        time: new Date().getHours() + ":00",
        temperature: Math.round(weather.main.temp),
        icon: {
            src: getWeatherIcon(weather.weather[0].main),
            alt: weather.weather[0].description,
            width: 50,
            height: 50
        }
    }];


    const dailyData = [{
        day: "Today",
        highTemp: Math.round(weather.main.temp_max),
        lowTemp: Math.round(weather.main.temp_min),
        icon: {
            src: getWeatherIcon(weather.weather[0].main),
            alt: weather.weather[0].description,
            width: 50,
            height: 50
        }
    }];


    return (
        <main className="min-h-screen p-10">
            <div className="container mx-auto content-center max-w-4xl space-y-12 flex flex-col items-center">
                <CurrentWeatherCard {...currentWeather} />
                <HourlyForecast hourlyData={hourlyData}/>
                <DailyForecast dailyData={dailyData}/>
            </div>
        </main>
    );
}