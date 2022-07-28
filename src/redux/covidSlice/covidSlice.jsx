import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('covid/fetchData', async (country) => {
  if (country === '') {
    const { data } = await axios('https://covid19.mathdro.id/api');
    return data;
  } else {
    const { data } = await axios(`https://covid19.mathdro.id/api/countries/${country}`);
    return data;
  }
});

export const fetchCountries = createAsyncThunk('covid/fetchCountries', async () => {
  const { data } = await axios.get(`https://covid19.mathdro.id/api/countries`);
  return data.countries;
});

export const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    covidData: '',
    countries: [],
    country: '',
  },
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.covidData = action.payload;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export default covidSlice.reducer;
