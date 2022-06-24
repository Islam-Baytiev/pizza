import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  activeIndex: 0,
  sorting: {name:"популярности", sort:"rating"},
  page: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    setSort(state, action) {
      state.sorting = action.payload;
    },
    setFilters(state, action) {
      state.activeIndex = Number(action.payload.activeIndex);
      state.sorting = action.payload.sorting;
      state.page = Number(action.payload.page);
    },
    setPage(state, action) {
      state.page = action.payload
    }
  }
})

export const  { setActiveIndex,setSort, setPage, setFilters } = filterSlice.actions;
export default filterSlice.reducer