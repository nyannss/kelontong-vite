import { createSlice } from '@reduxjs/toolkit';

const authInfoSlice = createSlice({
  name: `authInfo`,
  initialState: {
    token: "",
    newToken: "",
    role: "",
  },
  reducers: {
    assignToken: (prevState, action) => {
      return {
        ...prevState,
        token: action.payload,
      };
    },
    assignData: (prevState, action) => {
      return {
        ...prevState,
        role: action.payload.role,
      };
    },
    dismissToken: (prevState) => {
      return {
        ...prevState,
        token: "",
        role: "",
      };
    },
  },
});

export const authInfoAct = authInfoSlice.actions;
export default authInfoSlice.reducer;
