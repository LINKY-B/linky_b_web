import Button from "components/buttons/Button";
import { Spacing } from "components/spacing";
import { Text } from "components/text";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";
import { ModalCover } from "styles/Style";
import {
  AlertModalWrapper,
  CloseButtonWrapper,
  ContentWrapper,
} from "./AlertModal.style";

const AlertModal = ({
  title,
  subTitle,
  onClickClose,
  buttonTitle,
  buttonColor,
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
            <Button size="modal" color={buttonColor} onClick={onClickButton}>
              {buttonTitle}
            </Button>
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
  onClickButton: PropTypes.func,
};

export default AlertModal;
