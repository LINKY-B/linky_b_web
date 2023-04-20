import Footer from "containers/Footer/Footer";
import MainHeader from "containers/MainHeader/MainHeader";
import StickyFooter from "containers/StickyFooter/StickyFooter";
import { useNavigate } from "react-router-dom";
import { useHome } from "utils/hooks/useHome";
import {
  HomeWrapper,
  StyledButtonContainer,
  StyledIndicateButton,
} from "./Home.style";
import HomeList from "containers/HomeList/HomeList";
import { TotalAlertModal } from "containers/Modal/TotalAlertModal";
import { useState } from "react";
import Spacing from "components/spacing/Spacing";
import { useTheme } from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { data, isLoading, error } = useHome();
  const [isGraduate, setIsGraduate] = useState(false);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    console.log(error);
    return <span>Error : {error.message}</span>;
  }

  const students = data["재학생 유저 리스트"];
  const gradStudents = data["졸업생 유저 리스트"];
  const targetData = isGraduate ? gradStudents : students;

  const handleClick = (graduate) => {
    setIsGraduate(graduate);
  };

  const handleSearch = () => {
    navigate("/home/search");
  };

  return (
    <>
      <TotalAlertModal />
      <MainHeader search filter onClickSearch={handleSearch} />
      <HomeWrapper>
        <StyledButtonContainer>
          <StyledIndicateButton
            current={!isGraduate}
            onClick={() => handleClick(false)}
          >
            재학생
          </StyledIndicateButton>
          <StyledIndicateButton
            current={isGraduate}
            onClick={() => handleClick(true)}
          >
            졸업생
          </StyledIndicateButton>
        </StyledButtonContainer>
        <Spacing margin={theme.spacing.lg} />
        <HomeList data={targetData} />
      </HomeWrapper>
      <StickyFooter>
        <Footer />
      </StickyFooter>
    </>
  );
};
export default Home;
