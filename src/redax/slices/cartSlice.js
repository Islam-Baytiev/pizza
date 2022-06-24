import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  totalPrice: 0,
  totalCount:0,
  product: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const findProduct = state.product.find(obj=> obj.id === action.payload.id);
      if (findProduct) {
        findProduct.count++
      } else {
        state.product.push({
          ...action.payload,
          count:1
        });
      }
      state.totalCount +=1
      state.totalPrice += Number(action.payload.price)
    },
    plusItem(state, action) {
      const findProduct = state.product.find(obj=>obj.id === action.payload);
      if (findProduct) {
        findProduct.count++
        state.totalCount++
        state.totalPrice += findProduct.price
      }
    },
    minusItem(state, action) {
      const findProduct = state.product.find(obj => obj.id === action.payload)
      if (findProduct && findProduct.count>0) {
        findProduct.count--
        state.totalCount--
        state.totalPrice -= findProduct.price
      }
    },
    removeProduct(state,action) {
      const findProduct = state.product.find(obj => obj.id === action.payload)
      state.product = state.product.filter(obj=>obj.id !== action.payload)
      state.totalCount -= findProduct.count
      state.totalPrice -= findProduct.price*findProduct.count
    },
    clearProduct(state) {
      state.product = []
      state.totalCount = 0
      state.totalPrice = 0
    }
  }
})

export const  { addProduct, removeProduct, clearProduct,minusItem,plusItem } = cartSlice.actions;
export default cartSlice.reducer