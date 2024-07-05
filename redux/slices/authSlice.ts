

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface User {
//   userName: string;
//   department: string;
//   email: string;
// }

// interface AuthState {
//   user: User | null;
// }

// const initialState: AuthState = {
//   user: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<User>) => {
//       state.user = action.payload;
//     },
//     clearUser: (state) => {
//       state.user = null;
//     },
//   },
// });

// export const { setUser, clearUser } = authSlice.actions;
// export default authSlice.reducer;










import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;



























