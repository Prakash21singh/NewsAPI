import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    filter: "",
    news: [],
    filteredNews: [],
    error: "",
  },
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: initialState,
  reducers: {
    addFilter: (state, action) => {
      state.data.filter = action.payload;
    },
    addData: (state, action) => {
      state.data.news = action.payload;
    },
    setError: (state, action) => {
      state.data.error = action.payload;
    },
  },
});

export const { addData, addFilter, setError } = dataSlice.actions;

export default dataSlice.reducer;
