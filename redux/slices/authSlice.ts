







import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the user
interface User {
  userName: string;
  department: string;
  email: string
  // Add other fields if necessary
}

// Define the type for the auth state
interface AuthState {
  user: User | null; // User can be null if not logged in
}

// Initial state with type
const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the user
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    // Action to clear the user
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;





