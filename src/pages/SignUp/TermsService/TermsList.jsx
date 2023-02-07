import { theme } from "styles/theme";
import Text from "components/text/Text";
import { SIGNUP_TERMSSERVICE } from "constants/constants";
import Spacing from "components/spacing/Spacing";
import { TextBox } from "../SignUp.style";
import React from "react";
import ButtonBox from "./ButtonBox";

const TermsList = ({ children }) => {
  return (
    <>
      {Array.from({ length: 7 }, (v, idx) => {
        const termNumber = "TERMS" + (idx + 1);
        return (
          <div key={termNumber} className={termNumber}>
            <ButtonBox idx={idx + 1}>
              <Spacing />
              <Text fontSize={theme.fontSize.sm}>
                {SIGNUP_TERMSSERVICE[termNumber]}
              </Text>
            </ButtonBox>
            <TextBox>{SIGNUP_TERMSSERVICE[termNumber + "_CONTENT"]}</TextBox>
            {children}
          </div>
        );
      })}
    </>
  );
};

export default TermsList;
