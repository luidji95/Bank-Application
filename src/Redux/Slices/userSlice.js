import { createSlice } from "@reduxjs/toolkit";
import accounts from "../../accounts";

const initialState = {
  users: accounts,
  currentUser: null,
  isLoggedIn: false,
  isOnLoginPage: false,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    goToLogin(state) {
      state.isLoggedIn = false;
      state.isOnLoginPage = true;
    },
    loginUser(state, action) {
      const { email, password } = action.payload;
      const user = state.users.find(
        (user) => user.eMail === email && user.password === password
      );
      if (user) {
        state.currentUser = user;
        state.isLoggedIn = true;
      } else {
        alert("Wrong email or password!");
      }
    },
    registrationUser(state, action) {
      const { username, email, password } = action.payload;
      const exisingUser = state.users.find((user) => user.eMail === email);
      if (exisingUser) {
        alert("User with this email is already existes!");
        return;
      } else {
        const newUser = {
          username: username,
          eMail: email,
          password: password,
          userId: state.users.length + 1,
          profilePicture: "bank-profile-pic/picgit.JPG",
          balance: 160000,
          cardNumber: `${Date.now()}${state.users.length + 1}`,

          transactions: [],
        };

        state.users.push(newUser);
        alert("Registration successful! You can now log in");
      }
    },
  },
});

export default userSlice.reducer;
export const { goToLogin, loginUser, registrationUser } = userSlice.actions;
