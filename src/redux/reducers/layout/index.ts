import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ILayoutState {
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;
}

const initialState: ILayoutState = {
  bannerImage: "",
  backgroundColour: "",
  primaryColour: "",
  primaryColourHover: "",
  navBackgroundColour: "",
};

export const layout = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<ILayoutState>) => {
      state.bannerImage = action.payload.bannerImage;
      state.backgroundColour = action.payload.backgroundColour;
      state.primaryColour = action.payload.primaryColour;
      state.primaryColourHover = action.payload.primaryColourHover;
      state.navBackgroundColour = action.payload.navBackgroundColour;
    },
  },
});

export const { setLayout } = layout.actions;
export const layoutReducer = layout.reducer;
