"use client";
import { useEffect, useRef, useState } from "react";

// Change the base_api to use the forecast endpoint
const base_api = "https://api.openweathermap.org/data/2.5/forecast?q=accra&appid=8d65b434e0cdc0da95db65116d086dc0&units=metric";

export const getWeatherIcon = (weatherMain: string) => {
    switch (weatherMain) {
        case "Clear":
            return "/icons/sunny.svg";
        case "Clear Cloudy":
            return "/icons/clear-cloudy.svg";
        case "Mostly Cloudy":
            return "/icons/mostly-cloudy.svg";
        case "Clouds":
            return "/icons/cloudy.svg";
        case "Rain":
            return "/icons/rain.svg";
        case "Partly Cloudy":
            return "/icons/partly-cloudy.svg";
        case "Thunderstorm":
            return "/icons/thunderstorm.svg";
        case "Snow":
            return "/icons/snow.svg";
        case "Drizzle":
            return "/icons/drizzle.svg";
        case "Mist":
            return "/icons/mist.svg";
        case "Fog":
            return "/icons/fog.svg";
        case "Windy":
            return "/icons/windy.svg";
        default:
            return "/icons/sunny.svg";
    }
};

interface Weather {
    coordinates: { lon: number; lat: number };
    weather: { id: number; main: string; description: string; icon: string }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;

    };

    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export const useWeather = () => {
    const [weather, setWeather] = useState<Weather | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        fetch(base_api)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }
                return response.json();
            })
            .then((data) => {
                if (isMounted.current) {
                    setWeather(data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (isMounted.current) {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => {
            isMounted.current = false;
        };
    }, []);

    return { weather, loading, error };
};



