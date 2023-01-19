import styled from "styled-components";
import { Hr, Spacing } from "styles/Style";
import Cover from "./Cover";
import PropTypes from "prop-types";

const MainModalWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: none;
`;

const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mainWhite};
  border-radius: 6px;
  min-height: calc(var(--vh, 1vh) * 30);
  max-height: calc(var(--vh, 1vh) * (65));

  padding: 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.fontGrey};

  display: flex;
  flex-direction: column;
`;

const BottomButton = styled.button`
  height: calc(var(--vh, 1vh) * 9);
  width: 100%;
  padding: 1rem;
  border-radius: 6px;
  font-size: inherit;
  color: ${(props) => props.color || props.theme.colors.fortGreen};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.mainWhite};
`;

const MainModal = ({
  title,
  buttonTitle,
  buttonColor,
  buttonBackgroundColor,
  onClickButton,
  children,
}) => {
  return (
    <section className="MainModal">
      <Cover className="Cover" />
      <MainModalWrapper className="MainModalWrapper">
        <ContentWrapper>
          {title}
          <Hr />
          {children}
        </ContentWrapper>
        <Spacing />
        <BottomButton
          backgroundColor={buttonBackgroundColor}
          color={buttonColor}
          onClick={onClickButton}
        >
          {buttonTitle}
        </BottomButton>
      </MainModalWrapper>
    </section>
  );
};

MainModal.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonBackground: PropTypes.string,
  onClickButton: PropTypes.func,
};

export default MainModal;
