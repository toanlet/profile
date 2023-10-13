import { createSlice } from '@reduxjs/toolkit';

interface ICommonState {
  openDrawer: boolean;
}

const initialState: ICommonState = {
  openDrawer: false,
};

export const commonSlider = createSlice({
  name: 'common',
  initialState,
  reducers: {
    toggle(state) {
      if (state.openDrawer) {
        state.openDrawer = false;
      } else {
        state.openDrawer = true;
      }
    },
  },
});

export const { toggle } = commonSlider.actions;
export default commonSlider.reducer;
