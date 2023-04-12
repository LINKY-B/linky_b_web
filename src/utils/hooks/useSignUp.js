import { useMutation, useQueryClient, useQuery } from "react-query";
import {
  authEmail,
  checkNickName,
  getProfileImages,
  sendEmail,
  signUp,
} from "utils/apis/signUp";

export const useMutateSendEmail = () => {
  const queryClient = useQueryClient();

  return useMutation(sendEmail, {
    onSuccess: ({ data }) => {
      console.log(data.message);
      queryClient.invalidateQueries("send-email");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useMutateAuthEmail = () => {
  const queryClient = useQueryClient();

  return useMutation(authEmail, {
    onSuccess: ({ data }) => {
      console.log(data.message);
      queryClient.invalidateQueries("confirm-email");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useMutateNickName = () => {
  const queryClient = useQueryClient();

  return useMutation(checkNickName, {
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries("check-nickname");
      console.log(data.message);
    },
  });
};

export const useProfileImages = () => {
  return useQuery(["profileImages"], getProfileImages, {
    onSuccess: ({ data }) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useMutateSignUp = () => {
  const queryClient = useQueryClient();

  return useMutation(signUp, {
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries("signup");
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
