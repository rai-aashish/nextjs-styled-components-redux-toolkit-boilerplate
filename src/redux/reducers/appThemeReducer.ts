import { createSlice } from "@reduxjs/toolkit";
import {
  StyledThemeType,
  styledDarkTheme,
  styledDefaultTheme,
} from "../../../styles";

export interface appThemeState {
  currentTheme: "light" | "dark";
  styledTheme: StyledThemeType;
}

const initialState: appThemeState = {
  currentTheme: "light",
  styledTheme: styledDefaultTheme,
};

export const appThemeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.currentTheme === "light") {
        state.currentTheme = "dark";
        state.styledTheme = styledDarkTheme;
      } else {
        state.currentTheme = "light";
        state.styledTheme = styledDefaultTheme;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = appThemeSlice.actions;

export default appThemeSlice.reducer;
