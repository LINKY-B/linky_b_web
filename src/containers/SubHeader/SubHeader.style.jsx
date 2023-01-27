import styled from "styled-components";
import profile from "../../assets/images/profile.png";

const StyledSubHeader = styled.header`
  height: 55px;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;
const BackButtonWrapper = styled.div`
  margin-top: 5px;
  margin-left: 50px;
  align-items: center;
  width: 5%;
  display: flex;
  justify-content: start;
  > button {
    border: none;
    background-color: white;
    align-items: center;
  }
`;

const ProfileWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 70%;
  overflow: hidden;
  background-image: url(${profile});
`;

const HeadTextWrapper = styled.div`
  justify-content: start;
  display: table-cell;
  margin-right: 10px;
  margin-left: 20px;
`;

const MainText = styled.div`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.lg};
`;

const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: ${(props) => props.spacing || props.theme.spacing.lg};
  > img {
    width: 25px;
    height: 25px;
  }
`;

const SubTextWrapper = styled.div``;
const RightButtonWrapper = styled.div`
  margin-left: auto;
  padding-right: 20px;
  > .ChatButtonWrapper {
    width: 15%;
    display: flex;
    > img {
      margin-right: 20px;
    }
    > .moreButton {
      cursor: pointer;
    }
  }
  > .ProfileButtonWrapper {
    width: 10%;
    > img {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  button {
    padding: 10px;
    white-space: nowrap;
    font: inherit;
  }
`;

const SubText = styled.label`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.md};
  color: ${(props) => props.color || props.theme.colors.fontGrey};
  white-space: pre-line;
`;

export {
  StyledSubHeader,
  ProfileWrapper,
  BackButtonWrapper,
  HeadTextWrapper,
  LikeWrapper,
  SubTextWrapper,
  RightButtonWrapper,
  MainText,
  SubText,
};
