import { InputStyled } from "components/inputs/inputs.style";
import styled from "styled-components";

export const StyledSearch = styled.section`
  z-index: 40;
  min-height: 100%;
  width: var(--app-max-width, 100%);
  max-width: var(--app-max-width, 100%);

  background-color: ${(props) => props.theme.colors.mainWhite};
`;

export const SearchContainer = styled.div`
  min-height: 400px;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  background-color: ${(props) => props.theme.colors.mainGrey};

  display: flex;
  align-items: center;

  border-radius: 6px;
  padding: 0 0.5rem;

  flex: 9;
`;

export const SearchInput = styled(InputStyled)`
  background-color: inherit;
  border: none;
  outline: none;
  width: 100%;
`;

export const StyledButton = styled.button`
  flex: 1;
`;
