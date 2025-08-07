/* eslint-disable no-unused-vars */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const initialState = {
  username: '',
  isAuthenticated: false,
  status: "idle",
  position: {},
  address: "",
  error: ""
};
export const fetchAddress = createAsyncThunk('user/fetchAddress', async function () {
  try {
    console.log("call by clicking..");
    
    // 1) Get user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Use reverse geocoding API to get address
    const addressObj = await getAddress(position);
    console.log(addressObj);
    
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Return data
    return { position, address };
  } catch (error) {
    throw new Error("There was a problem getting your address make sure that please fill the form");
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
      
    },
    logout(state) {
      state.username = '';
      state.isAuthenticated = false;
      state.position = {};
      state.address = '';
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
});

export const { updateName, logout } = userSlice.actions;

export const getUsername = (state) => state.user.username;
export const getIsAuthenticated = (state) => state.user.isAuthenticated;

export default userSlice.reducer;










// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { getAddress } from '../../services/apiGeocoding';

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// const initialState = {
//   username: '',
//   status : "idle",
//   position : {},
//   address:"",
//   error : ""
// };




// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     updateName(state, action) {
//       state.username = action.payload;
//     },
//   },
//   extraReducers: (builder) =>
//     builder.addCase(
//       fetchAddress.pending,
//       (state, action) => {state.status = 'loading'}
//     ).addCase(fetchAddress.fulfilled, (state , action) => {

//         state.position = action.payload.position;
//         state.address = action.payload.address;
//         state.status = 'idle';
//     }).addCase(fetchAddress.rejected , (state , action) => {
//         state.status = 'error';
//         state.error = action.error.message;

//     })
// });

// export const { updateName } = userSlice.actions;
// export default userSlice.reducer;



