import Button from "components/buttons/Button";
import Text from "components/text/Text";
import SubHeader from "containers/SubHeader/SubHeader";
import { useSelector } from "react-redux";
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

const UnivInformation = ({ nextPage }) => {
  const onClick = () => {
    nextPage();
  };

  const userData = useSelector((state) => state.signUp);
  console.log(userData);
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

        <UnivAuth className="univ-auth" />

        <ContentBox className="next-button">
          <Button onClick={onClick} shadow>
            다음
          </Button>
        </ContentBox>
      </ContentWrapper>
    </>
  );
};

export default UnivInformation;
