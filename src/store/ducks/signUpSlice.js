import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserSignupReq: {
    authCode: "",
    gradeStatus: "",
    profileImg: "",
    userName: "",
    userNickName: "",
    userEmail: "",
    userPassword: "",
    userBirth: "",
    userSchoolName: "",
    userMajorName: "",
    userMBTI: "",
    userStudentNum: "",
    userInterests: [],
    userSex: "",
    userPersonalities: [],
    userSelfIntroduction: "",
  },
  schoolImg: "",
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.UserSignupReq[action.payload.key] = action.payload.value;
    },
    addUserSchoolImg: (state, action) => {
      state.schoolImg = action.payload;
    },
  },
});

export default signUpSlice.reducer;
export const { addUserInfo, addUserSchoolImg } = signUpSlice.actions;
