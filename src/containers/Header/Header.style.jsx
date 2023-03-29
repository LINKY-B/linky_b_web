import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 55px;
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
  width: 90%;
  max-width: 680px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ImageButton = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  width: 60%;
  max-width: 400px;
  > img {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
  max-width: 70px;
  min-width: 60px;
  > img {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
`;
