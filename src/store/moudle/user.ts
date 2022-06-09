import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  name: string;
  role: string;
  isLogin: boolean;
}

const initialState: IUserState = {
  name: "admin",
  role: "root",
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (store: IUserState) => {
      store.isLogin = !store.isLogin;
    },
    rename: (store: IUserState, action) => {
      store.name = action.payload.newName;
    },
  },
});

export const { login: loginAction, rename: renameAction } = userSlice.actions;
export default userSlice.reducer;
