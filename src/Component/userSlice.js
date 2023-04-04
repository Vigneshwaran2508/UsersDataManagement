import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      name: "Vigneshwaran D",
      age: 26,
      phoneNumber: 12,
      id: "1"
    }
  ]
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.value.push(action.payload.user);
    },
    removeUser: (state, action) => {
      const userId = action.payload.target.id;
      const modifyUsersList = state.value.filter((user) => user.id != userId);
      state.value = modifyUsersList;
    }
  }
});

export const { addUsers, removeUser } = userSlice.actions;
export const users = (state) => state.user.value;

export default userSlice.reducer;
