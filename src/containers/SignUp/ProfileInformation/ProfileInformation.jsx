import Button from "components/buttons/Button";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import SubHeader from "containers/SubHeader/SubHeader";
import { theme } from "styles/theme";
import {
  ContentBox,
  ContentWrapper,
  StatusBarBase,
  StatusBarStep,
} from "../SignUp.style";
import Gender from "./Gender";
import Introduction from "./Introduction";
import Mbti from "./Mbti";
import ProfileList from "./ProfileList";
import Keyword from "./Keyword";
import { useMutateSignUp } from "utils/hooks/useSignUp";
import { useSelector } from "react-redux";
import AlertModal from "components/alertModal/AlertModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileInformation = ({ univImage }) => {
  const personalityList = [
    "모험심이 강한",
    "다정한",
    "경계심이 강한",
    "고마워할 줄 아는",
    "대범한",
    "침착한",
    "조심성이 많은",
    "매력적인",
    "자신감 있는",
    "용기 있는",
    "예의 바른 ",
    "창조적인",
    "호기심이 많은",
    "결단력 있는",
    "절제력이 있는",
    "신중한",
    "느긋한",
    "효율적인",
    "공감을 잘하는",
    "열정적인",
    "외향적인",
    "대담한",
    "재미있는",
    "관대한",
    "온화한",
    "정직한",
    "겸손한",
    "상상력이 풍부한",
    "독립적인",
    "부지런한",
    "순수한",
    "지적인",
    "내성적인",
    "정의로운",
    "친절한",
    "어른스러운",
    "꼼꼼한",
    "잘 보살피는",
    "관찰력이 뛰어난",
    "낙천적인",
    "참을성이 많은",
    "사색적인",
    "통찰력 있는",
    "끈기 있는",
    "놀기 좋아하는",
    "개인적인 ",
    "주도적인",
    "정확한",
    "별난",
    "책임감 있는",
    "감성이 풍부한",
    "교양 있는",
    "즉흥적인",
    "보수적인",
    "자유분방한",
    "사심이 없는",
    "기발한",
    "건전한",
    "현명한",
    "재치 있는",
  ];
  const interestList = [
    "정보공유",
    "친목",
    "수다",
    "모집",
    "맛집",
    "스터디",
    "일상",
    "힐링",
    "유머",
    "취미",
    "음악",
    "영화",
    "드라마",
    "K-POP",
    "헬스",
    "취업",
    "공모전",
    "재테크",
    "스포츠",
    "코딩",
    "여행",
    "연애",
    "독서",
    "요리",
  ];
  const userData = useSelector((state) => state.signUp);
  const { mutateAsync } = useMutateSignUp();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handlerSuccessClick = () => {
    setShowModal(false);
    navigate("/login");
  };

  const onClickStart = async () => {
    try {
      const res = await mutateAsync({ userData, univImage });
      setShowModal(true);
      console.log(res);
    } catch ({ response }) {
      alert(response.data.message);
    }
  };

  return (
    <>
      <SubHeader />
      <StatusBarBase>
        <StatusBarStep step={4} />
      </StatusBarBase>

      <ContentWrapper>
        <ContentBox className="UnivInfoTitle">
          <Text fontWeight={700}>프로필 정보</Text>
        </ContentBox>

        <ContentBox>
          <Text>프로필</Text>
          <Spacing />
          <Text fontSize={theme.fontSize.xs}>
            프로필로 사용할 이미지를 선택해 주세요.
          </Text>
          <Spacing />
          <ProfileList />
        </ContentBox>

        <Gender>
          <Text>성별</Text>
          <Spacing />
        </Gender>

        <Mbti>
          <Text>MBTI</Text>
          <Spacing />
        </Mbti>

        <Keyword keywordList={personalityList} title="userPersonalities">
          <Text>성격</Text>
          <Spacing />
        </Keyword>

        <Keyword keywordList={interestList} title="userInterests">
          <Text>관심사</Text>
          <Spacing />
        </Keyword>

        <Introduction>
          <Text>소개</Text>
          <Spacing />
        </Introduction>

        <div>
          <Button onClick={onClickStart}>Linky - B 시작하기</Button>
        </div>
      </ContentWrapper>
      {showModal ? (
        <AlertModal
          title="회원가입 완료"
          subTitle="인증은 약 1~2일이 소요됩니다."
          buttonTitle="확인"
          onClickClose={handlerSuccessClick}
          onClickButton={handlerSuccessClick}
        ></AlertModal>
      ) : null}
    </>
  );
};

export default ProfileInformation;
