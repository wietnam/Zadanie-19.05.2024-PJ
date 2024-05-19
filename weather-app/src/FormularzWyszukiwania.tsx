import React, { useState } from 'react';

const FormularzWyszukiwania = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-10">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Wpisz nazwę miasta"
        className="border p-2 mr-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Szukaj</button>
    </form>
  );
};

export default FormularzWyszukiwania;