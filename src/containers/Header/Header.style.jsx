import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 55px;
  padding-top: 30px;
  padding-bottom: 30px;

  display: flex;
  align-items: center;

  text-align: center;

  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const ImageButton = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  > img {
    cursor: pointer;
  }
`;
