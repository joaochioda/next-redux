import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IThemeState {
  colorBackGroundState: string;
}

const initialState: IThemeState = {
  colorBackGroundState: "red",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeBackground: (state, action: PayloadAction<string>) => {
      state.colorBackGroundState = action.payload;
    },
  },
});

export const { setThemeBackground } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
