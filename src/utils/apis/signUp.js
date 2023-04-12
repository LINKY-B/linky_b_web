import { unauthorizedAxios } from "utils/customAxios";

export const sendEmail = async ({ email, userNickName }) => {
  return await unauthorizedAxios.post("/auth/signup/send-email", {
    email,
    userNickName,
  });
};

export const authEmail = async ({ authCode, email, userNickName }) => {
  return await unauthorizedAxios.post("/auth/signup/confirm-email", {
    authCode,
    email,
    userNickName,
  });
};

export const checkNickName = async (nickName) => {
  return await unauthorizedAxios.post("/auth/check-nickname", {
    nickName,
  });
};

export const getProfileImages = async () => {
  return await unauthorizedAxios.get("/auth/profile-images");
};

export const signUp = async ({ userData, univImage }) => {
  const formData = new FormData();
  formData.append("schoolImg", univImage);
  formData.append(
    "UserSignupReq",
    new Blob([JSON.stringify(userData["UserSignupReq"])], {
      type: "application/json",
    }),
  );

  return await unauthorizedAxios.post("/auth/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
