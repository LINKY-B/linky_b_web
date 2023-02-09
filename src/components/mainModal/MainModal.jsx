import { Spacing } from "components/spacing";
import { Text } from "components/text/";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";
import { Hr, ModalCover } from "styles/Style";
import {
  ContentWrapper,
  MainModalButton,
  MainModalWrapper,
} from "./MainModal.style";

const MainModal = ({
  title,
  buttonTitle,
  buttonColor,
  buttonBackgroundColor,
  onClickCover,
  onClickButton,
  children,
}) => {
  const theme = useTheme();

  return (
    <section className="MainModal">
      <ModalCover className="Cover" onClick={onClickCover} />
      <MainModalWrapper className="MainModalWrapper">
        <ContentWrapper>
          <Spacing />
          <Text color={theme.colors.fontGrey} fontSize={theme.fontSize.xs}>
            {title}
          </Text>
          <Hr />
          {children}
        </ContentWrapper>
        <Spacing />
        <MainModalButton
          backgroundColor={buttonBackgroundColor}
          onClick={onClickButton}
        >
          <Text color={buttonColor} fontWeight={700}>
            {buttonTitle}
          </Text>
        </MainModalButton>
      </MainModalWrapper>
    </section>
  );
};

MainModal.propTypes = {
  title: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonBackground: PropTypes.string,
  onClickButton: PropTypes.func,
  onClickCover: PropTypes.func,
};

export default MainModal;
