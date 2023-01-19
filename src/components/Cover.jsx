import styled from "styled-components";

const StyledCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 50;
  margin: 0;
`;

/**
 * 화면을 비활성화 해주는 Cover
 */
export const Cover = () => {
  return <StyledCover></StyledCover>;
};

export default Cover;
