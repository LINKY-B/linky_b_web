import styled, { css } from "styled-components";

export const Box = styled.div`
  padding: 15px 80px;
  background: ${(props) => props.colors || props.theme.colors.mainWhite};
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid
    ${(props) => props.colors || props.theme.colors.mainGrey};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Column = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  :hover {
    color: #9fc743;
    font-weight: 500;


     .ChatSvg {
      //추후에 배경색 9fc743 circle fill white로 변경
        ${(props) =>
          props.chat &&
          css`
            path {
              fill: #9fc743;
              stroke: #9fc743;
            }
            circle {
              fill: #9fc743;
            }
          `}

      }

    path {
      stroke-width: 0.01;
      fill: #9fc743;
      stroke: white;

      ${(props) =>
        props.match &&
        css`
          stroke-width: 1.1;
        `}




      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

export const FooterImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterText = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  > p {
    font-size: ${(props) => props.fontSize || props.theme.fontSize.md};
  }
`;
