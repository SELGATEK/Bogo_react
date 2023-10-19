// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { setMessage, setNavigation, } from "../message";
// import { View } from "react-native";


// export const signup = createAsyncThunk('auth/signup', async ({ firstName, lastName, email, number, password, Repeat_password, props }, thunkAPI) => {
//   fetch('http://192.168.0.16:3021/merchant/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       first_name: firstName,
//       last_name: lastName,
//       email: email,
//       mobile_number: number,
//       create_password: password,
//       repeat_password: Repeat_password,
//     })
//   })
//     .then(async response => {
//       if (response.status === 200 || 201) {
//         let json = await response.json()
//         if (json.success) {
//           console.log("SignData", json)
//           thunkAPI.dispatch(
//             setMessage({ message: json.message, isError: false }),
//           )
//           return json
//         } else {
//           console.log("SignData", json)
//           thunkAPI.dispatch(
//             setMessage({ message: json.message, isError: true }),
//           )
//           // thunkAPI.dispatch(setNavigation({navigation:true}),)
//         }
//       } else {
//         let json = await response.json()
//         thunkAPI.dispatch(setMessage({ message: json.message, isError: true }))
//         return thunkAPI.rejectWithValue()
//       }
//     })
//     .catch(error => {
//       console.log(error);
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       thunkAPI.dispatch(setMessage({ message: message, isError: true }))
//       return thunkAPI.rejectWithValue()
//     })
// })

// export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
//   fetch('http://192.168.0.16:3021/merchant/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password,
//     })
//   })
//     .then(async response => {
//       if (response.status === 200 || 201) {
//         let json = await response.json()
//         if (json.success) {
//           console.log("loginData", json)
//           thunkAPI.dispatch(
//             setMessage({ message: json.message, isError: false }),
//           )
//           return json
//         } else {
//           console.log("loginData", json)
//           thunkAPI.dispatch(
//             setMessage({ message: json.message, isError: true }),
//           )
//         }
//       } else {
//         let json = await response.json()
//         thunkAPI.dispatch(setMessage({ message: json.message, isError: true }))
//         return thunkAPI.rejectWithValue()
//       }
//     })
//     .catch(error => {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       thunkAPI.dispatch(setMessage({ message: message, isError: true }))
//       return thunkAPI.rejectWithValue()
//     })
// })

// export const Forget = createAsyncThunk('signUpUser', async ({ email }, thunkAPI) => {
//   fetch('http://192.168.0.16:3021/merchant/forgot_password', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email: email,
//     })
//   })
//     .then(async response => {
//       if (response.status === 200 || 201) {
//         let json = await response.json()
//         if (json.success) {
//           console.log("loginData", json)
//           thunkAPI.dispatch(
//             setMessage({ message: json.message, isError: false }),
//           )

//           return json
//         } else {
//           console.log("loginData", json)
//           thunkAPI.dispatch(
//             setMessage({ message: json.message, isError: true }),
//           )
//         }
//       } else {
//         let json = await response.json()
//         thunkAPI.dispatch(setMessage({ message: json.message, isError: true }))
//         return thunkAPI.rejectWithValue()
//       }
//     })
//     .catch(error => {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       thunkAPI.dispatch(setMessage({ message: message, isError: true }))
//       return thunkAPI.rejectWithValue()
//     })
// })

// const initialState = { isLoggedIn: false, user: null }
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [signup.fulfilled]: (state, action) => {
//       state.isLoggedIn = true
//       state.user = action.payload
//     },
//     [signup.rejected]: state => {
//       state.isLoggedIn = false
      
//       state.user = null
//     },
//     // [signup.fulfilled]: state => {
//     //   state.isLoggedIn = false
//     //   state.user = null
//     // },
//   },
// })

// const { reducer } = authSlice
// export default reducer;