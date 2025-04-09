import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlueprintState {
  blueprint: string | null;
}

const initialState: BlueprintState = {
  blueprint: null,
};

const blueprintSlice = createSlice({
  name: 'blueprint',
  initialState,
  reducers: {
    setBlueprint(state, action: PayloadAction<string>) {
      state.blueprint = action.payload;
    },
    clearBlueprint(state) {
      state.blueprint = null;
    },
  },
});

export const { setBlueprint, clearBlueprint } = blueprintSlice.actions;
export default blueprintSlice.reducer;