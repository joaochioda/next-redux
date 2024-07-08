import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IIntlState {
  locale: string;
}

const initialState: IIntlState = {
  locale: "pt-br",
};

export const intl = createSlice({
  name: "intl",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = intl.actions;
export const intlReducer = intl.reducer;
