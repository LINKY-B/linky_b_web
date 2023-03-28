import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileImg: "",
  UserSignupReq: {
    userName: "",
    userNickName: "",
    userEmail: "",
    userPassword: "",
    userBirth: "",
    userSchoolName: "",
    userMajorName: "",
    userMBTI: "",
    userStudentNum: "",
    gradeStatus: "",
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
export const { addUserInfo, addUserSchoolImg, addUserProfileImg } =
  signUpSlice.actions;
