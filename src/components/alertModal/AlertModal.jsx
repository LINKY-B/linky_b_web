import PropTypes from "prop-types";
import { useTheme } from "styled-components";

import Button from "components/buttons/Button";
import { CrossIcon } from "components/Icon/Icon";
import { Spacing } from "components/spacing";
import { Text } from "components/text";
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
  onClickCover,
  children,
}) => {
  const theme = useTheme();

  onClickCover = onClickCover || onClickClose;

  return (
    <section className="AlertModal">
      <ModalCover className="Cover" onClick={onClickCover} />
      <AlertModalWrapper>
        <CloseButtonWrapper>
          <button onClick={onClickClose}>
            <CrossIcon width="1.5em" height="1.5em" />
          </button>
        </CloseButtonWrapper>

        <ContentWrapper>
          <Text whiteSpace="pre">{title}</Text>
          <Spacing />
          {subTitle && (
            <Text
              fontSize={theme.fontSize.sm}
              color={theme.colors.fontGrey}
              whiteSpace="pre"
            >
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
  onClickCover: PropTypes.func,
};

export default AlertModal;
