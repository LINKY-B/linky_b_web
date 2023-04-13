// 이메일
export const isValidEmail = (email) => {
  const validEmailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return validEmailPattern.test(email);
};

// 이름(비어있는지 or 길이)
export const isValidName = (name) => {
  const validNamePattern = /^[가-힣]{2,4}$/;

  return validNamePattern.test(name);
};

// 닉네임(2 ~ 8자)
export const isValidNickName = (nickName) => {
  const validNickNamePattern = /^[가-힣a-zA-Z0-9]{2,8}$/;

  return validNickNamePattern.test(nickName);
};

// 생년월일(숫자로된 8자리)
export const isValidBirth = (birth) => {
  const validBirthPattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

  return validBirthPattern.test(birth);
};

// 비밀번호(영문, 숫자, 특수문자 포함 7자 이상)
export const isValidPassword = (password) => {
  const validPasswordPattern =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,30}$/;

  return validPasswordPattern.test(password);
};

// 비밀번호 확인(비밀번호와 동일한지)
export const isValidPasswordCheck = (password, passwordCheck) => {
  return password === passwordCheck;
};

// 학번 길이 체크
export const isValidStudentNumber = (stdNum) => {
  const validStudenNumberPattern = /^[0-9]{2}$/;

  return validStudenNumberPattern.test(stdNum);
};

// 기본 정보 모두 입력되었는지 체크
export const isValidBasicInfo = (
  userName,
  userNickName,
  userEmail,
  userBirth,
  userPassword,
) => {
  return (
    isValidName(userName) &&
    isValidNickName(userNickName) &&
    isValidEmail(userEmail) &&
    isValidBirth(userBirth) &&
    isValidPassword(userPassword)
  );
};

// 학교 정보 모두 입력되었는지 체크
export const isValidUnivInfo = (
  userSchoolName,
  userMajorName,
  userStudentNum,
  gradeStatus,
) => {
  console.log(
    userSchoolName,
    userMajorName,
    isValidStudentNumber(userStudentNum),
    gradeStatus !== "",
  );
  return (
    userSchoolName &&
    userMajorName &&
    isValidStudentNumber(userStudentNum) &&
    gradeStatus !== ""
  );
};
