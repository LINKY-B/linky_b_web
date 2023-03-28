import Text from "components/text/Text";
import SubHeader from "containers/SubHeader/SubHeader";
import { theme } from "styles/theme";
import {
  ContentBox,
  ContentWrapper,
  StatusBarBase,
  StatusBarStep,
} from "../SignUp.style";
import { SIGNUP_TERMSSERVICE } from "constants/constants";
import Spacing from "components/spacing/Spacing";
import TermsList from "./TermsList";
import TermsServiceFooter from "./TermsServiceFooter";

const TermsService = ({ nextPage }) => {
  return (
    <>
      <SubHeader />

      <StatusBarBase>
        <StatusBarStep step={1} />
      </StatusBarBase>

      <ContentWrapper footer>
        <ContentBox className="Title">
          <Text fontSize={theme.fontSize.md} fontWeight={700}>
            {SIGNUP_TERMSSERVICE.TITLE}
          </Text>

          <Spacing />
          <Text fontSize={theme.fontSize.sm}>
            {SIGNUP_TERMSSERVICE.SUBTITLE}
          </Text>
          <Spacing margin={theme.spacing.xl} />
        </ContentBox>

        <TermsList>
          <Spacing margin={theme.spacing.xl} />
        </TermsList>
      </ContentWrapper>

      <TermsServiceFooter nextPage={nextPage} />
    </>
  );
};

export default TermsService;
