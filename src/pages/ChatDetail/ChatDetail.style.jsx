import styled from "styled-components";

export const StyledChatDetail = styled.section`
  height: calc(var(--vh, 1vh) * 100);
`;

export const StyledChatList = styled.div`
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;

  height: 85%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  // border: 1px solid blue;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin: 1rem 0.2rem;
  align-items: flex-end;
  // border: 1px solid red;
`;

export const ReversedFlexWrapper = styled(FlexWrapper)`
  flex-direction: row-reverse;
  align-items: center;
  // border: 1px solid pink;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  // border: 1px solid green;
`;

export const ChatText = styled.div`
  width: fit-content;
  border: 1px solid ${(props) => props.theme.colors.mainGreen};
  border-radius: 6px;
  padding: 0.2rem 0.5rem;

  background-color: ${(props) =>
    props.inversed ? props.theme.colors.mainGreen : "none"};
`;

export const StyledDateLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledChatInputSection = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.mainWhite};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledChatInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.mainGrey};
  border-radius: 6px;
  padding: 0.5rem;
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.colors.fontGrey};
  background-color: inherit;
  width: 100%;
  outline: none;
`;

export const StyledChatInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 0 1rem;
  background: ${(props) => props.theme.colors.mainGrey};
`;
