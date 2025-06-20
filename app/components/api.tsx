"use client";
import { useEffect, useRef, useState } from "react";

// Change the base_api to use the forecast endpoint
const base_api = "https://api.openweathermap.org/data/2.5/forecast?q=accra&appid=8d65b434e0cdc0da95db65116d086dc0&units=metric";

export const getWeatherIcon = (weatherMain: string) => {
    switch (weatherMain.toLowerCase()) {
        case "cloudy":
            return "/icons/cloudy.svg";
        case "rain":
            return "/icons/rain.svg";
        case "light rain":
        case "drizzle":
        case "moderate rain":
        case "shower rain":
            return "/icons/showers.svg";
        case "clear":
            return "/icons/sunny.svg";
        case "thunderstorm":
            return "/icons/thunderstorm.svg";
        case "snow":
            return "/icons/snow.svg";
        case "mist":
        case "fog":
            return "/icons/foggy.svg";
        case "scattered clouds":
        case "few clouds":
            return "/icons/partly-cloudy.svg";
        case "broken clouds":
        case "overcast clouds":
            return "/icons/cloudy.svg";
        default:
            return "/icons/sunny.svg";
    }
};
interface Weather {
    list: Array<{
        dt: number;
        main: {
            temp: number;
            feels_like: number;
            temp_min: number;
            temp_max: number;
        };
        weather: Array<{
            id: number;
            main: string;
            description: string;
            icon: string;
        }>;
    }>;
    city: {
        name: string;
        country: string;
    };
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



