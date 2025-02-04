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
          balance: 200000,
          cardNumber: `${Date.now()}${state.users.length + 1}`,

          transactions: [],
        };

        state.users.push(newUser);
        alert("Registration successful! You can now log in");
      }
    },
    addIncome(state, action) {
      const { amount, reason } = action.payload;
      state.currentUser.balance += amount;

      state.currentUser.transactions.push({
        reason,
        amount,
        date: new Date().toISOString().split("T")[0],
      });
    },
    sendMoney(state, action) {
      const { amount, recipientAccount } = action.payload;

      if (state.currentUser.balance < amount) {
        alert("Insufficient funds!");
        return;
      }

      const senderIndex = state.users.findIndex(
        (user) => user.userId === state.currentUser.userId
      );
      const recipientIndex = state.users.findIndex(
        (user) => user.cardNumber.toString() === recipientAccount
      );

      if (recipientIndex === -1) {
        alert("Recipient account not found!");
        return;
      }

      const updatedUsers = [...state.users];

      updatedUsers[senderIndex] = {
        ...updatedUsers[senderIndex],
        balance: updatedUsers[senderIndex].balance - amount,
        transactions: [
          ...updatedUsers[senderIndex].transactions,
          {
            reason: `Sent to ${updatedUsers[recipientIndex].username}`,
            amount: -amount,
            date: new Date().toISOString().split("T")[0],
          },
        ],
      };

      updatedUsers[recipientIndex] = {
        ...updatedUsers[recipientIndex],
        balance: updatedUsers[recipientIndex].balance + amount,
        transactions: [
          ...updatedUsers[recipientIndex].transactions,
          {
            reason: `Received from ${updatedUsers[senderIndex].username}`,
            amount: amount,
            date: new Date().toISOString().split("T")[0],
          },
        ],
      };

      state.users = updatedUsers;
      state.currentUser = updatedUsers[senderIndex];

      alert(
        `Successfully sent $${amount} to ${updatedUsers[recipientIndex].username}!`
      );
    },
    logoutUser(state) {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export default userSlice.reducer;
export const {
  goToLogin,
  loginUser,
  registrationUser,
  addIncome,
  sendMoney,
  logoutUser,
} = userSlice.actions;
