import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", todo: "Wake up" },
  { id: "2", todo: "brush my teeth" },
  { id: "3", todo: "play tennis" },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
