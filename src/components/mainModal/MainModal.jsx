import { Spacing } from "components/spacing";
import PropTypes from "prop-types";
import { Hr, ModalCover } from "styles/Style";
import {
  MainModalButton,
  ContentWrapper,
  MainModalWrapper,
} from "./MainModal.style";

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
        <MainModalButton
          backgroundColor={buttonBackgroundColor}
          color={buttonColor}
          onClick={onClickButton}
        >
          {buttonTitle}
        </MainModalButton>
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
