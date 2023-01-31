import { SelectButtonStyled } from "components/buttons/Buttons.style";
import styled from "styled-components";

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

export const ColumnDirectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.2rem;
`;

export const ForClickHoverWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
  flex: 7;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled(FlexContainer)`
  justify-content: space-around;
  flex: 1;
`;

export const RadiusLabel = styled(SelectButtonStyled)`
  color: ${(props) => props.theme.colors.mainBlack};
  font-size: ${(props) => props.theme.fontSize.xs};
  padding: 0 0.3rem;
  height: fit-content;
`;
