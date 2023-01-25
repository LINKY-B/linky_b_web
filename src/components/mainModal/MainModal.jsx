import { Hr, ModalCover } from "styles/Style";
import PropTypes from "prop-types";
import {
  BottomButton,
  ContentWrapper,
  MainModalWrapper,
} from "./MainModal.style";
import { Spacing } from "components/spacing";

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
      <ModalCover className="Cover" />
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
