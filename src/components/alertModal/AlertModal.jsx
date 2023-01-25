import { Spacing } from "components/spacing";
import { Text } from "components/text";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";
import { ModalCover } from "styles/Style";
import {
  AlertModalWrapper,
  CloseButtonWrapper,
  ContentWrapper,
  TempButton,
} from "./AlertModal.style";

const AlertModal = ({
  title,
  subTitle,
  onClickClose,
  buttonTitle,
  buttonColor,
  buttonBackgroundColor,
  onClickButton,
  children,
}) => {
  const theme = useTheme();

  return (
    <section className="AlertModal">
      <ModalCover className="Cover" />
      <AlertModalWrapper>
        <CloseButtonWrapper>
          <button onClick={onClickClose}>X</button>
        </CloseButtonWrapper>

        <ContentWrapper>
          <Text>{title}</Text>
          <Spacing />
          {subTitle && (
            <Text fontSize={theme.fontSize.sm} color={theme.colors.fontGrey}>
              {subTitle}
            </Text>
          )}
          <Spacing />
          {children}
          <Spacing />
          {buttonTitle && (
            <TempButton
              color={buttonColor}
              backgroundColor={buttonBackgroundColor}
              onClick={onClickButton}
            >
              {buttonTitle}
            </TempButton>
          )}
        </ContentWrapper>
      </AlertModalWrapper>
    </section>
  );
};

AlertModal.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonBackground: PropTypes.string,
  onClickButton: PropTypes.func,
};

export default AlertModal;
