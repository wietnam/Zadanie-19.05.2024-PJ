import React from 'react';

interface Pogoda {
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const InformacjePogodowe: React.FC<{ pogoda: Pogoda }> = ({ pogoda }) => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-2">Aktualna pogoda:</h2>
      <p>Temperatura: {pogoda.temperature}°C</p>
      <p>Wilgotność: {pogoda.humidity}%</p>
      <p>Prędkość wiatru: {pogoda.windSpeed} m/s</p>
    </div>
  );
};

export default InformacjePogodowe;