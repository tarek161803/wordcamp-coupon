import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  interest: [],
};

export const participantSlice = createSlice({
  name: "participant",
  initialState,
  reducers: {
    updateParticipantValue: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    resetState: () => initialState,
    updateParticipantInterest: (state, action) => {
      if (state.interest.includes(action.payload)) {
        state.interest = state.interest.filter((item) => item !== action.payload);
      } else {
        state.interest.push(action.payload);
      }
    },
  },
});

export const { updateParticipantValue, updateParticipantInterest, resetState } = participantSlice.actions;

export default participantSlice.reducer;
