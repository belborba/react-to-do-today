import { useEffect, useState } from "react";

type WeatherDataProps = {
  locationName: string;
  country: string;
  temperature: number;
  icon: string;
};

export const Weather = () => {
  const [weather, setWeather] = useState<WeatherDataProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = "";

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=auto:ip`
      );
      const data = await res.json();

      if (data.error) {
        setError(data.error.message || "Erro ao buscar clima.");
        return;
      }

      setWeather({
        locationName: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        icon: data.current.condition.icon,
      });
    } catch (err) {
      setError("Erro ao buscar clima.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      {loading && <p>Carregando clima...</p>}
      {error && <p className="text-zinc-800 dark:text-zinc-50">{error}</p>}
      {!loading && weather && (
        <div className="flex gap-3.5 items-center text-zinc-800 dark:text-zinc-50">
          <p>
            {weather.locationName}, {weather.country}
          </p>
          <img
            className="w-[50px] h-auto"
            src={weather.icon}
            alt="Ícone do clima"
          />
          <p className="text-zinc-800 dark:text-zinc-50">
            {weather.temperature}°C
          </p>
        </div>
      )}
    </>
  );
};
