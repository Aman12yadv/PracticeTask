import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  data: [],           
  currentPage: 1,      
  cardsPerPage: 6,     
};


const cardsSlice = createSlice({
  name: 'cards',       
  initialState,         
  reducers: {
    setCards: (state, action) => {
      state.data = action.payload;  
    },
    removeCard: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload); 
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;  
    },
  },
});


export const { setCards, removeCard, setCurrentPage } = cardsSlice.actions;


export default cardsSlice.reducer;