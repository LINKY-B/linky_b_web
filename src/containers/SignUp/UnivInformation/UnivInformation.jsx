import Button from "components/buttons/Button";
import Text from "components/text/Text";
import SubHeader from "containers/SubHeader/SubHeader";
import {
  ContentBox,
  ContentWrapper,
  StatusBarBase,
  StatusBarStep,
} from "../SignUp.style";
import Major from "./Major";
import StudentNumber from "./StudentNumber";
import Univ from "./Univ";
import UnivAuth from "./UnivAuth";
import { useDispatch } from "react-redux";
import { checkUnivInfo } from "store/ducks/signUpSlice";

const UnivInformation = ({ getImage }) => {
  const dispatch = useDispatch("signUp");

  const handleNextClick = () => {
    dispatch(checkUnivInfo());
  };

  return (
    <>
      <SubHeader />
      <StatusBarBase>
        <StatusBarStep step={3} />
      </StatusBarBase>

      <ContentWrapper>
        <ContentBox className="UnivInfoTitle">
          <Text fontWeight={700}>학교 정보</Text>
        </ContentBox>

        <Univ />

        <Major />

        <StudentNumber />

        <UnivAuth className="univ-auth" getImage={getImage} />

        <ContentBox className="next-button">
          <Button onClick={handleNextClick} shadow>
            다음
          </Button>
        </ContentBox>
      </ContentWrapper>
    </>
  );
};

export default UnivInformation;
