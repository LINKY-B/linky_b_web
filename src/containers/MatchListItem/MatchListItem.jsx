import CheckButton from "components/buttons/CheckButton";
import Spacing from "components/spacing/Spacing";
import { Text } from "components/text/";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import {
  ButtonWrapper,
  ColumnDirectionWrapper,
  FlexContainer,
  ForClickHoverWrapper,
  ProfileImage,
  RadiusLabel,
} from "./MatchListItem.style";

const MatchListItem = ({ user, onClickApproveButton, onClickRejectButton }) => {
  const {
    userId,
    userProfileImg,
    userNickname,
    userMajorName,
    userLikecount,
    getUserInterestRes,
  } = user;
  const theme = useTheme();
  const navigate = useNavigate();

  const onClickWrapper = () => navigate(`/match/${userId}`);

  return (
    <FlexContainer key={userId}>
      <ForClickHoverWrapper onClick={onClickWrapper}>
        <ProfileImage src={userProfileImg} alt="" />
        <Spacing />

        <ColumnDirectionWrapper>
          <FlexContainer>
            <Text>{userNickname}</Text>
            <Spacing />
            <Text color={theme.colors.fontGreen} fontSize={theme.fontSize.sm}>
              {userLikecount}
            </Text>
            <Spacing />
            <Text color={theme.colors.fontGrey} fontSize={theme.fontSize.xs}>
              {userMajorName}
            </Text>
          </FlexContainer>

          <FlexContainer>
            {getUserInterestRes.map((i) => (
              <RadiusLabel key={i.interest}>{i.interest}</RadiusLabel>
            ))}
          </FlexContainer>
        </ColumnDirectionWrapper>
      </ForClickHoverWrapper>

      <ButtonWrapper>
        <CheckButton onClick={onClickApproveButton} />
        <CheckButton onClick={onClickApproveButton} isChecked={false} />
      </ButtonWrapper>
    </FlexContainer>
  );
};

export default MatchListItem;
