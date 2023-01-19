import styled, { useTheme } from "styled-components";
import { Spacing } from "styles/Style";
import Cover from "./Cover";
import PropTypes from "prop-types";

const AlertModalWrapper = styled.div`
  z-index: 100;
  min-width: 269px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 6px;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.mainWhite};
`;

const CloseButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  padding-top: 0;
`;

const TempButton = styled.button`
  padding: 1rem;
  border-radius: 6px;
  color: ${(props) => props.color || props.theme.colors.mainWhite};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.mainGreen};
`;

// white-space: pre-line을 통해 내용에 \n가 있으면 줄바꿈이 되도록 한다.
const Text = styled.label`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.md};
  color: ${(props) => props.color || props.theme.colors.mainBlack};
  white-space: pre-line;
`;

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
      <Cover className="Cover" />
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
