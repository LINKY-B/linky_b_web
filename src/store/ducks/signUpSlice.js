import { createSlice } from "@reduxjs/toolkit";
import { isValidBasicInfo, isValidUnivInfo } from "containers/SignUp/validator";

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
  page: 1,
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.UserSignupReq[action.payload.key] = action.payload.value;
    },
    nextPage: (state) => {
      state.page += 1;
    },
    checkBasicInfo: (state) => {
      const { userName, userNickName, userEmail, userBirth, userPassword } =
        state.UserSignupReq;
      if (
        isValidBasicInfo(
          userName,
          userNickName,
          userEmail,
          userBirth,
          userPassword,
        )
      ) {
        state.page += 1;
      } else {
        alert("모든 입력폼을 올바르게 작성해 주세요!");
      }
    },
    checkUnivInfo: (state) => {
      const { userSchoolName, userMajorName, userStudentNum, gradeStatus } =
        state.UserSignupReq;
      if (
        isValidUnivInfo(
          userSchoolName,
          userMajorName,
          userStudentNum,
          gradeStatus,
        )
      ) {
        state.page += 1;
      } else {
        alert("모든 입력폼을 올바르게 작성해 주세요!");
      }
    },
  },
});

export default signUpSlice.reducer;
export const { addUserInfo, nextPage, checkBasicInfo, checkUnivInfo } =
  signUpSlice.actions;
