// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const valueSearch = createAsyncThunk(
//   "values/search",
//   async (values, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         "https://restcountries.com/v3.1/all",
//         values
//       );
//       //console.log("login response", response);
//       const data = response.data;
//       const options = data.map((f) => ({
//         value: f.name.official,
//         label: f.name.official,
//         flag: f.flag,
//       }));
//       console.log("option", options);
//       return options;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const valuesSlice = createSlice({
//   name: "values",
//   initialState: {
//     values: [],
//   },
//   reducers: {
//     searchCountry: (state, action) => {
//       state.values = action.payload;
//     },
//   },
// });

// export const { searchCountry } = valuesSlice.actions;
// export default valuesSlice.reducer;

import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://course-api.com/react-useReducer-cart-project";

export const initialState = {
  values: [],
  amount: 0,
  total: 0,
  isLoading: false,
  error: null,
};

export const getValues = createAsyncThunk("cart/getCartItems", async (name) => {
  try {
    const res = await axios(url);
    return res.data;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

const valuesSlice = createSlice({
  name: "values",
  initialState,
  //   reducers: {
  //     clearCart: (state) => {
  //       state.cartItems = [];
  //     },
  //     removeItem: (state, action) => {
  //       const itemId = action.payload;
  //       state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
  //     },
  //     increase: (state, { payload }) => {
  //       // there are two ways, {payload} or set a variable itemId
  //       const cartItem = state.cartItems.find((item) => item.id === payload.id);
  //       cartItem.amount = cartItem.amount + 1;
  //     },
  //     decrease: (state, action) => {
  //       const itemId = action.payload;
  //       const cartItem = state.cartItems.find((item) => item.id === itemId);
  //       if (cartItem.amount === 1) {
  //         state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
  //       }
  //       cartItem.amount = cartItem.amount - 1;
  //     },
  //     calculatedTotal: (state) => {
  //       let amount = 0;
  //       let total = 0;
  //       state.cartItems.forEach((item) => {
  //         amount += item.amount;
  //         total += item.amount * item.price;
  //       });
  //       state.amount = amount;
  //       state.total = total;
  //     },
  //   },
  extraReducers: {
    [getValues.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getValues.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
      state.isLoading = false;
    },
    [getValues.pending]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculatedTotal } =
  valuesSlice.actions;

export default valuesSlice.reducer;
