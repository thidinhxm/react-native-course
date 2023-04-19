import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: [] as string[],
  },
  reducers: {
    addFavorite: (state, action: {type: string, payload: string}) => {
      state.ids.push(action.payload);
    },
    removeFavorite: (state, action: {type: string, payload: string}) => {
      state.ids.splice(state.ids.indexOf(action.payload), 1);
    }, 
  }
});

export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export default favoriteSlice.reducer;