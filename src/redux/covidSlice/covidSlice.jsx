import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk('covid/fetchCountries', async () => {
  const { data } = await axios.get(`https://covid19.mathdro.id/api/countries`);
  return data.countries;
});

export const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    countries: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export default covidSlice.reducer;
