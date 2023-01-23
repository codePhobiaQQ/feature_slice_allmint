import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { colorModeTypes } from '../types';

interface colorModeI {
  colorMode: colorModeTypes;
}

const initialState: colorModeI = {
  colorMode: 'dark',
};

const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    changeColorMode: (
      state,
      action: PayloadAction<{ colorMode: colorModeTypes }>
    ) => {
      state.colorMode = action.payload.colorMode;
    },
  },
});

export const { reducer: colorModeReducer, actions: colorModeActions } =
  colorModeSlice;
