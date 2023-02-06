import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 55px;
  padding-top: 40px;
  padding-bottom: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
`;

//MainTextWrapper는 추후에 text에서 이미지로 변경될시 변경해야함
export const MainTextWrapper = styled.div`
  word-break: keep-all;
  margin-left: 20px;
  width: 20%;
  white-space: nowrap;
  > h2 {
    font-size: ${(props) => props.fontSize || props.theme.fontSize.lg};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 20%;
  margin-right: 20px;
  > div > img {
    margin-right: 10px;
    cursor: pointer;
    width: 25px;
    height: 25px;
  }
`;
