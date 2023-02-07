import { SelectButtonStyled } from "components/buttons/Buttons.style";
import styled from "styled-components";

export const StyledMemberInfoContainer = styled.div`
  width: 100%;
  // border: 1px solid blue;
`;

export const SpaceBetweenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid purple;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.1rem 0;

  // border: 1px solid pink;
`;

export const ColumnDirectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const RadiusLabel = styled(SelectButtonStyled)`
  color: ${(props) => props.theme.colors.mainBlack};
  font-size: ${(props) => props.theme.fontSize.xxxs};
  padding: 0 0.3rem;
  height: fit-content;
`;
