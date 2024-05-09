// components/Filter.js
import React, { useState } from 'eact';

const Filter = ({ data, onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    onChange({ country: event.target.value });
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    onChange({ year: event.target.value });
  };

  return (
    <div>
      <label>Country:</label>
      </div>
      )
    }