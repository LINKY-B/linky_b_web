import styled from "styled-components";

export const StyledMatch = styled.section`
  background-color: ${(props) => props.theme.colors.mainWhite};
  // border: 1px solid pink;
  // min-height: calc(var(--vh, 1vh) * 100);
`;

export const MatchWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
  padding: 1rem 0;
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const AlignItemsCenterWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
