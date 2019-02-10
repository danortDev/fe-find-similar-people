import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import debounce from 'debounce-promise';
import search from 'app/client/search';

const getAsyncOptions = (inputValue) => {
  return search(inputValue).then((response) => {
    const result = response.data.map((option) => ({
      label: option.name,
      value: option.username
    }));
    console.log('RESULT', result);
    return result;
  });
};


const loadOptions = (inputValue) => getAsyncOptions(inputValue);
const debouncedLoadOptions = debounce(loadOptions, 1000, {
  leading: true
});


const Autocomplete = ({ query, handleChange }) => {
  return (
    <AsyncSelect
      isClearable
      value={query}
      onChange={handleChange}
      placeholder="Busca entre las opciones"
      loadOptions={(inputValue) => debouncedLoadOptions(inputValue)}
    />
  );
};

export default Autocomplete;
