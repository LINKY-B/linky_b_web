import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  height: 55px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > .left_child {
    word-break: keep-all;
    text-align: center;
    font-size: 28px;
    width: 15%;
  }

  & > .right_child {
    display: flex;
    justify-content: space-around;
    width: 10%;

    > div > img {
      cursor: pointer;
      width: 25px;
      height: 25px;
    }
  }
`;

const search = () => {
  alert("검색버튼 클릭");
};

const filter = () => {
  alert("필터버튼 클릭");
};

const MainHeader = () => {
  return (
    <StyledHeader>
      <div className="left_child">LINKY-B</div>

      <div className="right_child">
        <div className="emo1">
          <img
            src={process.env.PUBLIC_URL + `assets/reading glasses.png`}
            onClick={search}
          ></img>
        </div>
        <div className="emo2">
          <img
            src={process.env.PUBLIC_URL + `assets/filter.png`}
            onClick={filter}
          ></img>
        </div>
      </div>
    </StyledHeader>
  );
};
export default MainHeader;
