import styled from "styled-components";

export const ItemWrapper = styled.div`
  overflow: visible;
  width: 100%;
  display: flex;
  height: 100%;
  position: relative;
  // border: 1px solid red;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 49px;
  height: 49px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const SideButton = styled.button`
  border-radius: 6px;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.mainGreen};
`;

export const SideButtonWrapper = styled.div`
  position: absolute;
  height: inherit;
  width: 65px;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSideWrapper = styled(SideButtonWrapper)`
  left: 0;
`;

export const RightSideWrapper = styled(SideButtonWrapper)`
  right: 0;
`;

export const StyledMemberInfoSection = styled.section`
  width: 100%;
  height: 100%;
  // border: 1px solid red;
  background-color: ${(props) => props.theme.colors.mainWhite};
`;

export const StyledMemberInfoContainer = styled.div`
  max-width: 95%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  // border: 1px solid orange;
`;
