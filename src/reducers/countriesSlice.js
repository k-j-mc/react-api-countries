import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: 'idle',
  error: null
}

export const getCountries = createAsyncThunk("getCountries", async (e) => {

    const response = await axios.get("https://restcountries.com/v3.1/all");

    return response.data;

});


export const countriesSlice = createSlice({
  name: "countries",
  initialState,

  extraReducers: (builder) => {

    builder.addCase(getCountries.pending, (state, action) => {
      state.status = "loading"
    });

    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = "succeeded"
    });

    builder.addCase(getCountries.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
    });
  },
})

export default countriesSlice.reducer