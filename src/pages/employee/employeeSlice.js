import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  entities: [],
  lastError: null,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.payload.error}`;
      state.loading = false;
    },
    startCall: (state) => {
      state.error = null;
      state.loading = true;
    },
    fetch: (state, action) => {
      state.loading = false;
      state.error = null;
      state.entities = action.payload;
    },
  },
});
