import styled, { css, useTheme } from "styled-components";
import { Spacing } from "styles/Style";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const StyledSubHeader = styled.header`
  height: 55px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: start;

  > .header__head-text {
  }

  > .header__button {
  }
`;
const LogoWrapper = styled.div`
  margin-top: 5px;
  margin-left: 50px;
  align-items: center;
  width: 10%;
  display: flex;

  > button {
    border: none;
    background-color: white;
    align-items: center;
  }
`;

const HeadTextWrapper = styled.div`
  justify-content: start;
  display: table-cell;
  > h2 {
    font-size: ${(props) => props.fontSize || props.theme.fontSize.lg};
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 10%;

  > div > img {
    cursor: pointer;
    width: 25px;
    height: 25px;
  }
`;

const SubHeader = ({ text, subText, emo, isEtcButton, isAcceptButton }) => {
  const navigate = useNavigate();

  console.log(text);
  return (
    <StyledSubHeader>
      <LogoWrapper>
        <button
          onClick={() => {
            alert("뒤로가기 버튼 클릭");
            navigate(-1);
          }}
        >
          <img
            className="back_img "
            src={process.env.PUBLIC_URL + `assets/back.png`}
            alt="이미지 오류"
          ></img>
        </button>
      </LogoWrapper>
      <HeadTextWrapper>
        <h2>{text}</h2>
      </HeadTextWrapper>

      <ButtonWrapper></ButtonWrapper>
    </StyledSubHeader>
  );
};

SubHeader.propTypes = {
  text: PropTypes.string,
};
export default SubHeader;
