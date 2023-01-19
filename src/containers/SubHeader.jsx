import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledSubHeader = styled.header`
  height: 55px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: start;

  & > .left_child {
    margin-left: 20px;

    width: 20%;
    display: flex;
    align-items: center;

    > button {
      border: none;
      background-color: white;
    }
  }

  & > .head_text {
    font-size: 20px;
    display: table-cell;
    vertical-align: middle;
  }

  & > .right_child {
    display: flex;

    width: 10%;

    > div > img {
      cursor: pointer;
      width: 25px;
      height: 25px;
    }
  }
`;

const SubHeader = ({ text }) => {
  const navigate = useNavigate();

  return (
    <StyledSubHeader>
      <div className="left_child">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <img
            className="back_img "
            src={process.env.PUBLIC_URL + `assets/back.png`}
            alt="이미지 오류"
          ></img>
        </button>
      </div>

      <div className="head_text">{text}</div>

      <div className="right_child"></div>
    </StyledSubHeader>
  );
};
export default SubHeader;
