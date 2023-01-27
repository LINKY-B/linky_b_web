import Button from "components/buttons/Button";
import { MatchModal } from "components/MatchModal";
import { Spacing } from "components/spacing";
import { Text } from "components/text";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { matchActions, MATCH_MODAL_TYPES } from "store/ducks/matchSlice";
import { useAppDispatch } from "store/Hooks";
import { useTheme } from "styled-components";
import { Hr } from "styles/Style";
import { useMatchDetail } from "utils/hooks/useMatch";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import {
  Footer,
  FooterContainer,
  ImageWrapper,
  InfoItemContainer,
  InfoWrapper,
  IntroductionWrapper,
  ProfileImage,
  StyledHeader,
  StyledMatchDetail,
  SubHeader,
  BlackSelectButton,
} from "./MatchDetail.style";

const MatchDetail = () => {
  const theme = useTheme();
  const params = useParams();
  const navigate = useNavigate();
  const { userId } = params;
  const { data: user, error, isLoading, isError } = useMatchDetail(userId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(matchActions.resetModal());
    };
  }, [dispatch]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error : {error}</span>;
  }

  if (!user) {
    return <span>There is no data!</span>;
  }

  const {
    userNickname,
    userMajorName,
    userStudentNum,
    userProfileImg,
    userBirth,
    userSex,
    userMBTI,
    userSelfIntroduction,
    getUserPersonalityRes,
    getUserInterestRes,
    userLikecount,
  } = user;

  const userInfos = [
    { title: "학과", value: userMajorName },
    { title: "학번", value: userStudentNum },
    { title: "나이", value: userBirth },
    { title: "성별", value: userSex },
    { title: "MBTI", value: userMBTI },
  ];

  const onClickApproveButton = () => {
    dispatch(
      matchActions.showModal({
        userId,
        userNickname,
        modalType: MATCH_MODAL_TYPES.APPROVE,
      }),
    );
  };

  const onClickRejectButton = () => {
    dispatch(
      matchActions.showModal({
        userId,
        userNickname,
        modalType: MATCH_MODAL_TYPES.REJECT,
      }),
    );
  };

  return (
    <StyledMatchDetail className="MatchDetail">
      <MatchModal
        onSuccessMutation={() => {
          navigate(-1);
        }}
      />
      <StyledHeader>
        <SubHeader>
          <Text>{userNickname}</Text>
          <Spacing />
          <Text color={theme.colors.fontGreen} fontSize={theme.fontSize.sm}>
            {userLikecount}
          </Text>
          <Spacing />
          <Text color={theme.colors.fontGrey} fontSize={theme.fontSize.xs}>
            {userMajorName}
          </Text>
        </SubHeader>
        <ImageWrapper>
          <ProfileImage src={userProfileImg} alt="" />
        </ImageWrapper>
      </StyledHeader>

      <IntroductionWrapper>
        <Text>{userSelfIntroduction}</Text>
      </IntroductionWrapper>

      <InfoWrapper>
        <Text color={theme.colors.fontGrey} fontSize={theme.fontSize.sm}>
          회원정보
        </Text>
        <Spacing />
        <div>
          {userInfos.map(({ title, value }) => {
            return (
              <InfoItemContainer key={title}>
                <Text>{title}</Text>
                <Spacing />
                <Text fontSize={theme.fontSize.sm}>{value}</Text>
              </InfoItemContainer>
            );
          })}
        </div>

        <Hr />

        <div>
          <Text color={theme.colors.fontGrey} fontSize={theme.fontSize.sm}>
            성격
          </Text>
          <InfoItemContainer>
            {getUserPersonalityRes.map((p) => {
              return (
                <BlackSelectButton
                  key={p.personality}
                  style={{ color: theme.colors.mainBlack }}
                >
                  {p.personality}
                </BlackSelectButton>
              );
            })}
          </InfoItemContainer>
        </div>

        <Hr />

        <div>
          <Text color={theme.colors.fontGrey} fontSize={theme.fontSize.sm}>
            관심사
          </Text>
          <InfoItemContainer>
            {getUserInterestRes.map((i) => {
              return (
                <BlackSelectButton key={i.interest}>
                  {i.interest}
                </BlackSelectButton>
              );
            })}
          </InfoItemContainer>
        </div>
      </InfoWrapper>
      <Footer>
        <FooterContainer>
          <Button onClick={onClickRejectButton} color="grey">
            거절하기
          </Button>
          <Spacing />
          <Button onClick={onClickApproveButton}>수락하기</Button>
        </FooterContainer>
      </Footer>
    </StyledMatchDetail>
  );
};

export default MatchDetail;
